interface Frame {
  isKids: null | string;
  promoTypeDetail: null | string;
  promo: {
    [key: string]: {
      discount: string;
    };
  };
  offerPrice: string;
  insPrice: null | string;
  promoType: null | string;
}
interface LensPackage {
  treatmentFamily: null | string;
  designType: null | string;
  promo: null | {
    [key: string]: {
      discount: string;
    };
  };
  treatment: null | string;
  catEntryId: string;
  insurable: boolean;
  type: string;
  rxValues: {
    sph: {
      min: string;
      max: string;
    };
    cyl: {
      min: string;
      max: string;
    };
    add: null | {
      min: string;
      max: string;
    };
  };
  uvProtection: boolean;
  listPrice: string;
  isMirror: null | string;
  thickness: null | string;
  isBaseLens: null | string;
  polar: null | string;
  treatmentGroup: null | string;
  blueLight: null | string;
  colorCategory: null | string;
  transition: null | string;
  upc: string;
  productCatEntryId: string;
  antiScratch: boolean;
  color: null | string;
  treatmentCategory: null | string;
  offerPrice: string;
  brand: null | string;
  insPrice: string;
  clen: null | string;
  productUPC: string;
  antiReflective: null | string;
  recommendedUse: null | string[];
}
interface Package {
  frame: Frame;
  lensPackage: LensPackage;
}
interface Selection {
  attribute: string;
  value: any;
}
interface SelectedAttributes {
  [step: number]: Selection;
}
interface Brain {
  packages: Package[];
  filteredPackages: Package[];
  currentStep: number;
  selections: { [step: number]: (pkg: Package) => boolean };
  selectedAttributes: SelectedAttributes;
}

////////////////////////////////////////////////////////////////////////
class Brain {
  constructor() {
    this.packages = [];
    this.filteredPackages = [];
    this.currentStep = 0;
    this.selections = {};
    this.selectedAttributes = {};
  }

  init(config: any) {
    this.packages = config?.lensesData?.packages || [];
    this.filteredPackages = config?.lensesData?.packages || [];
  }

  initializeFromURL(url: string): void {
    const urlParams = new URLSearchParams(new URL(url).search);
    urlParams.forEach((value, key) => {});
  }

  #filterPackages() {
    let filteredPackages = this.packages;

    for (const step in this.selections) {
      const criterion = this.selections[step];
      filteredPackages = filteredPackages.filter(criterion);
    }

    this.filteredPackages = filteredPackages;
  }

  selectOption(
    step: number,
    attribute: string,
    value: string,
    filterFunction: (pkg: Package) => boolean
  ): void {
    this.selections[step] = filterFunction;
    this.selectedAttributes[step] = { attribute, value };
    this.#filterPackages();
    this.currentStep = Math.max(step, this.currentStep);
  }

  resetSelection(toStep: number): void {
    // Remove all selections and filter criteria from the specified step onwards
    for (let step = toStep + 1; step <= this.currentStep; step++) {
      delete this.selections[step];
      delete this.selectedAttributes[step];
    }

    this.currentStep = toStep;
    this.#filterPackages();
  }

  next(): void {
    if (this.currentStep < Object.keys(this.selections).length) {
      this.currentStep++;
      this.#filterPackages();
    }
  }

  back(): void {
    if (this.currentStep > 0) {
      // Clear selections and selected attributes for steps beyond the current one
      for (
        let step = this.currentStep;
        step <= Object.keys(this.selections).length;
        step++
      ) {
        delete this.selections[step];
        delete this.selectedAttributes[step];
      }
      this.currentStep--;
      this.#filterPackages();
    }
  }

  getFilteredPackages(): Package[] {
    return this.filteredPackages;
  }

  getSelectedAttributes(): SelectedAttributes {
    return this.selectedAttributes;
  }
}

const brain = new Brain();

export default brain;
