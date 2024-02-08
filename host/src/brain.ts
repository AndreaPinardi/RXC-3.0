class Brain {
  constructor() {
    this.packages = null;
    this.filteredPackages = null;
    this.selections = [];
  }

  new(config) {
    this.packages = config?.lensesData?.packages;
  }
}

const brain = new Brain();

export default brain;
