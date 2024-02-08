import {
  getLensesDataContent,
  getLensesDataPackages,
  getLensesDataPrices,
} from "@/backend/api";
import {
  env,
  getChannelFromBrand,
  isLocalHost,
  sunRule,
} from "@/utils/functions";
import { useEffect, useMemo, useState } from "react";

const getRxValues = (locale, rxValues) => {
  if (!rxValues[locale]) {
    const defaultRxValues = rxValues["en_US"];
    if (defaultRxValues) {
      return defaultRxValues;
    } else {
      throw new Error("no rxValues for en_US");
    }
  } else {
    return rxValues[locale];
  }
};

const isPublished = (locale, published) => {
  if (!published[locale]) {
    const defaultRxValues = published["en_US"];
    if (defaultRxValues === true || defaultRxValues === false) {
      return defaultRxValues;
    } else {
      throw new Error("no published for en_US");
    }
  } else {
    return published[locale];
  }
};

const noPricesInPackages = (packages) => {
  if (!packages) return null;
  const onlyLensPackages = packages.find((pkg) => pkg?.frame)
    ? packages.map((pkg) => pkg.lensPackage)
    : packages;
  return onlyLensPackages.every((pkg) => {
    const keys = Object.keys(pkg);
    return !keys.includes("offerPrice") && !keys.includes("listPrice");
  });
};

const mergeLensesDataPrices = (packages, prices) => {
  return packages.map(({ frame, lensPackage }) => {
    const pkg = prices.find(
      (p) => p.lensPackage.catEntryId === lensPackage.catEntryId
    );
    return {
      frame: {
        ...frame,
        ...pkg?.frame,
      },
      lensPackage: {
        ...lensPackage,
        ...pkg?.lensPackage,
      },
    };
  });
};

const mergeAkamaiPrices = (packages, prices) => {
  return packages.map(({ frame, lensPackage }) => {
    const pkg = prices.prices.find(
      (p) => p.lensPackage.upc === lensPackage.upc
    );
    return {
      frame: {
        ...frame,
        ...pkg?.frame,
      },
      lensPackage: {
        ...lensPackage,
        ...pkg?.lensPackage,
      },
    };
  });
};

export default function useBackend(config: any) {
  const [packages, setPackages] = useState(config?.lensesData?.packages);
  const [prices, setPrices] = useState(config?.lensesData?.prices);
  const [content, setContent] = useState(config?.lensesData?.content);
  const [newConfig, setNewConfig] = useState(config);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL =
    config?.baseURLs?.assetsCDN || "https://assets.lenscrafters.com";
  const frameModel = config?.data?.frame?.model;
  const frameColor = config?.data?.frame?.color;
  const channel = getChannelFromBrand(config?.brand);
  const locale = config?.translation?.language || "en_US";
  const country = config?.country || "US";

  const category = useMemo(() => {
    const pkgs = packages?.filter(
      (pkg: any) => pkg.lensPackage.type.toLowerCase() !== "frame only"
    );
    return (
      (pkgs?.every((p) => sunRule(p.lensPackage)) && "SUNGLASSES") ||
      "EYEGLASSES"
    );
  }, [packages]);

  useEffect(() => {
    if (!config?.lensesData?.content && packages && packages.length > 0) {
      getLensesDataContent(URLS.content, setContent);
      if (noPricesInPackages(packages)) {
        getLensesDataPrices(URLS.prices, setPrices);
      }
    }
  }, [packages]);

  const URLS = {
    prices: `${
      isLocalHost() ? "https://cors-anywhere.herokuapp.com/" : ""
    }${baseURL}/extra/image/rxcbe/${
      env() || "test"
    }/prices/${channel}/prices_${country}.json`,
    packages: `${
      isLocalHost() ? "https://cors-anywhere.herokuapp.com/" : ""
    }${baseURL}/extra/image/rxcbe/${
      env() || "test"
    }/packages/${channel}/package_${frameModel}.json.zip`,
    content: `${
      isLocalHost() ? "https://cors-anywhere.herokuapp.com/" : ""
    }${baseURL}/extra/image/rxcbe/${
      env() || "test"
    }/pof/${channel}/pof_${channel}_${category}_${locale}.json.zip`,
  };

  useEffect(() => {
    const setLensesDataPackages = (data) => {
      console.log(data);
      const moco = `${frameModel}__${frameColor}`;
      const lensesIds = data.frames[moco];
      let packages = Object.keys(data.packages)
        .filter((lensId) => lensesIds.includes(lensId))
        .reduce((acc, lensId) => {
          const lensPkgs = data.packages[lensId].map((pkg) => ({
            frame: {},
            lensPackage: pkg,
          }));
          return [...acc, ...lensPkgs];
        }, [])
        .filter((pkg) => isPublished(locale, pkg.lensPackage.published));

      packages.forEach((pkg) => {
        pkg.lensPackage.rxValues = getRxValues(
          locale,
          pkg.lensPackage.rxValues
        );
      });

      console.log(packages);
      setPackages(packages);
    };

    if (config && !config?.lensesData?.packages) {
      console.log("packages from akamai");
      getLensesDataPackages(URLS.packages, setLensesDataPackages);
    }
    if (!config?.lensesData?.prices) {
      if (
        config?.lensesData?.packages &&
        noPricesInPackages(config?.lensesData?.packages)
      ) {
        getLensesDataPrices(URLS.prices, setPrices);
      }
    }
  }, []);

  const lensPackagesWithPrices = useMemo(() => {
    if (!packages) return null;
    if (prices) {
      console.log("no prices in lensesData.packages");
      if (Array.isArray(prices)) {
        console.log("prices from lensesData.prices");
        return mergeLensesDataPrices(packages, prices);
      } else {
        console.log("prices from akamai");
        return mergeAkamaiPrices(packages, prices);
      }
    }
    return packages;
  }, [packages, prices]);

  useEffect(() => {
    if (lensPackagesWithPrices && content) {
      const newContent = content?.content;
      let newConfig;
      if (newContent) {
        newConfig = {
          ...config,
          lensesData: {
            ...config?.lensesData,
            packages: lensPackagesWithPrices,
            content: { ...newContent, badge: null },
          },
        };
      } else {
        newConfig = {
          ...config,
          lensesData: {
            ...config?.lensesData,
            packages: lensPackagesWithPrices,
            content: { ...content, badge: null },
          },
        };
      }
      setNewConfig(newConfig);
      setIsLoading(false);
    }
  }, [lensPackagesWithPrices, content]);

  if (isLoading || !config) return null;

  return newConfig;
}
