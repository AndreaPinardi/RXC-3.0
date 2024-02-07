import axios from "axios";
import glassesFlowMock from "@/mock/flow/glasses";
import { extractJsonfromZip } from "@/utils/functions";

const mockBackofficeUrl =
  "https://run.mocky.io/v3/d9ea2554-5ae7-4cbf-ae9f-d23aa1263b74";

export const getBackofficeConfig = async () => {
  // const response = await axios.get(mockBackofficeUrl);
  // return response.data;
  return glassesFlowMock;
};

export const getLensesDataContent = (url, onSuccess) => {
  axios
    .get(url, {
      responseType: "arraybuffer",
      decompress: true,
    })
    .then((res) => {
      extractJsonfromZip(res.data, onSuccess);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getLensesDataPackages = (url, onSuccess) => {
  axios
    .get(url, {
      responseType: "arraybuffer",
      decompress: true,
    })
    .then((res) => {
      extractJsonfromZip(res.data, onSuccess);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getLensesDataPrices = (url, onSuccess) => {
  axios
    .get(url)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
