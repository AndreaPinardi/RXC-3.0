window.config = {
  /* MANDATORY div to anchor the component */
  brand: "persol",
  selector: "#rxcApp",
  currencyFormat: {
    thousandSeparator: ",",
    decimalSeparator: ".",
    prefix: "$",
  },
  showTaxLabel: false,
  /* MANDATORY lens data, example format https://rxc.luxottica.com/dev/v3.0.0/standalone/mock/lenses/eyeLensesMockResponse.json */
  lensesData: {
    content: {
      polar: {},
      colorCategory: {
        Prizm: {
          imageFileName: "prizm",
          title: "Prizm™",
          sequence: 2,
          description:
            "Different colored lenses with PRIZM™ technology for enhanced contrasts and light control.",
          contentIdentifier: "Prizm",
        },
        "Solid Tint Polarized": {
          imageFileName: "solid-tint-polar",
          title: "Solid Tint Polarized",
          sequence: 2,
          description:
            "Uniform tinted lenses with polarized coating for reduced glares.",
          contentIdentifier: "Solid_Tint_Polar",
        },
        "Prizm Polarized": {
          imageFileName: "prizm-polarized",
          title: "Prizm™ Polarized",
          sequence: 3,
          description:
            "Different colored lenses with PRIZM™ technology for enhanced contrasts and polarized coating for reduced glares. ",
          contentIdentifier: "Prizm_Polarized",
        },
      },
      blueLight: {},
      designType: {
        Tuned: {
          title: "LensCrafters lenses",
          imageFileName: "single-vision",
          description:
            "Premium quality and scratch-resistant lenses, with anti-reflective coating included. ",
          sequence: 1,
          contentIdentifier: null,
          type: null,
        },
      },
      color: {
        "PRIZM Black Polarized": {
          title: "Black",
          imageFileName1: "Swatch__8921O",
          sequence: 0,
          imageFileName2: null,
        },
        "Grey Polarized": {
          title: "Grey",
          imageFileName1: "Swatch__1669",
          sequence: 0,
          imageFileName2: null,
        },
        "Deep Blue Polarized": {
          title: "Deep Blue",
          imageFileName1: "Swatch__8249",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Dark Golf": {
          title: "Dark Golf",
          imageFileName1: "Swatch__8936O",
          sequence: 0,
          imageFileName2: null,
        },
        "Brown Polarized": {
          title: "Brown",
          imageFileName1: "Swatch__1592",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Trail": {
          title: "Trail",
          imageFileName1: "Swatch__8280O",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Field": {
          title: "Field",
          imageFileName1: "Swatch__2275",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Golf": {
          title: "Golf",
          imageFileName1: "Swatch__8273O",
          sequence: 0,
          imageFileName2: null,
        },
        "Prizm Polarized Deep Water": {
          title: "Deep Water",
          imageFileName1: "Swatch__8281O",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Sapphire Polarized": {
          title: "Sapphire",
          imageFileName1: "Swatch__8922O",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Road": {
          title: "Road",
          imageFileName1: "Swatch__8279O",
          sequence: 0,
          imageFileName2: null,
        },
        "Black Iridium Polarized": {
          title: "Black Iridium",
          imageFileName1: "Swatch__2023",
          sequence: 0,
          imageFileName2: null,
        },
        "PRIZM Jade Polarized": {
          title: "Jade",
          imageFileName1: "Swatch__8923O",
          sequence: 0,
          imageFileName2: null,
        },
      },
      treatment: {},
      transition: {},
      thickness: {
        "Thin Sun": {
          imageFileName: "thin-sun",
          title: "Premium - Thin",
          sequence: 2,
          description:
            "Polycarbonate<br>A lighter lens with superior clarity and resistance to breakage. Ideal for light to moderate prescriptions (+4.00 to -4.00).",
          contentIdentifier: "Thickness_Thin",
          badge: null,
        },
      },
      brand: {
        Oakley: {
          imageFileName: "oakley-lens",
          title: "Oakley Authentic Lenses",
          sequence: 1,
          description:
            "Built the Oakley way with athletes in mind, perfectly fitted to your Oakley frames.",
          contentIdentifier: "Brand_Oakley",
        },
      },
      antiReflective: {
        "Premium Sun": {
          imageFileName: "ar-premium-sun",
          title: "Premium",
          sequence: 2,
          description:
            "All the benefits of the Classic anti-reflective but with enhanced scratch resistance and 100% UV protection. Plus it repels water and oil to prevent smudges, keeping your lenses cleaner for longer.",
          contentIdentifier: "Treatment_Anti_Rreflective_Premium",
        },
      },
      type: {
        "Single Vision": {
          imageFileName: "single-vision",
          title: "Single Vision",
          sequence: 1,
          description: "Corrects near, intermediate or far-sightedness",
        } /* ,
                "Frame Only": {
                    "imageFileName": "frame-only",
                    "title": "Frame only",
                    "sequence": 4,
                    "description": "Without lenses or enhancing treatments."
                } */,
      },
    },
    packages: [
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: null,
          treatment: null,
          catEntryId: "754360",
          insurable: false,
          type: "Frame Only",
          rxValues: null,
          uvProtection: false,
          listPrice: "0.00",
          isMirror: null,
          thickness: null,
          isBaseLens: null,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "99",
          productCatEntryId: "754359",
          antiScratch: false,
          color: null,
          offerPrice: "0.00",
          brand: null,
          insPrice: null,
          clen: null,
          productUPC: "Plano",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476019",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "8",
            },
            cyl: {
              min: "-5",
              max: "5",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "581.67",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Solid Tint Polarized",
          transition: null,
          upc: "3713-OAw_OO1andS45",
          productCatEntryId: null,
          antiScratch: true,
          color: "Black Iridium Polarized",
          offerPrice: "290.83",
          brand: "Oakley",
          insPrice: null,
          clen: "2023",
          productUPC: null,
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476020",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "8",
            },
            cyl: {
              min: "-5",
              max: "5",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "581.67",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Solid Tint Polarized",
          transition: null,
          upc: "3713-OAw_S45",
          productCatEntryId: null,
          antiScratch: true,
          color: "Grey Polarized",
          offerPrice: "290.83",
          brand: "Oakley",
          insPrice: null,
          clen: "1669",
          productUPC: null,
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476021",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "8",
            },
            cyl: {
              min: "-5",
              max: "5",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "581.67",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Solid Tint Polarized",
          transition: null,
          upc: "3713-OAw_O19andS45",
          productCatEntryId: null,
          antiScratch: true,
          color: "Deep Blue Polarized",
          offerPrice: "290.83",
          brand: "Oakley",
          insPrice: null,
          clen: "8249",
          productUPC: null,
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476022",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "8",
            },
            cyl: {
              min: "-5",
              max: "5",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "581.67",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Solid Tint Polarized",
          transition: null,
          upc: "3718-OAw_S45",
          productCatEntryId: null,
          antiScratch: true,
          color: "Brown Polarized",
          offerPrice: "290.83",
          brand: "Oakley",
          insPrice: null,
          clen: "1592",
          productUPC: null,
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476024",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-3",
              max: "2",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "648.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm",
          transition: null,
          upc: "3524-OHw_O15andS45",
          productCatEntryId: "3074457345618476023",
          antiScratch: true,
          color: "PRIZM Golf",
          offerPrice: "324.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8273O",
          productUPC: "Oakley SV PRIZM Non-Polar",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476025",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-3",
              max: "2",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "648.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm",
          transition: null,
          upc: "3526-OHw_OO9andS45",
          productCatEntryId: "3074457345618476023",
          antiScratch: true,
          color: "PRIZM Field",
          offerPrice: "324.33",
          brand: "Oakley",
          insPrice: null,
          clen: "2275",
          productUPC: "Oakley SV PRIZM Non-Polar",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476026",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-3",
              max: "2",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "648.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm",
          transition: null,
          upc: "3525-OHw_OO2andS45",
          productCatEntryId: "3074457345618476023",
          antiScratch: true,
          color: "PRIZM Road",
          offerPrice: "324.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8279O",
          productUPC: "Oakley SV PRIZM Non-Polar",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476027",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-3",
              max: "2",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "648.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm",
          transition: null,
          upc: "3527-OHw_O16andS45",
          productCatEntryId: "3074457345618476023",
          antiScratch: true,
          color: "PRIZM Trail",
          offerPrice: "324.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8280O",
          productUPC: "Oakley SV PRIZM Non-Polar",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476028",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-3",
              max: "2",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "648.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm",
          transition: null,
          upc: "3524-OHw_OO1andS45",
          productCatEntryId: "3074457345618476023",
          antiScratch: true,
          color: "PRIZM Dark Golf",
          offerPrice: "324.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8936O",
          productUPC: "Oakley SV PRIZM Non-Polar",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476030",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "6",
            },
            cyl: {
              min: "-7",
              max: "7",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "706.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm Polarized",
          transition: null,
          upc: "3794-OHw_O18andS45",
          productCatEntryId: "3074457345618476029",
          antiScratch: true,
          color: "Prizm Polarized Deep Water",
          offerPrice: "353.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8281O",
          productUPC: "Oakley PRIZM Polarized",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476031",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "6",
            },
            cyl: {
              min: "-7",
              max: "7",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "706.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm Polarized",
          transition: null,
          upc: "3793-OHw_OO1andS45",
          productCatEntryId: "3074457345618476029",
          antiScratch: true,
          color: "PRIZM Black Polarized",
          offerPrice: "353.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8921O",
          productUPC: "Oakley PRIZM Polarized",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476032",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "6",
            },
            cyl: {
              min: "-7",
              max: "7",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "706.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm Polarized",
          transition: null,
          upc: "3193-OHw_OO6andS45",
          productCatEntryId: "3074457345618476029",
          antiScratch: true,
          color: "PRIZM Jade Polarized",
          offerPrice: "353.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8923O",
          productUPC: "Oakley PRIZM Polarized",
          antiReflective: "Premium Sun",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "204.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "3074457345618476033",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-6",
              max: "6",
            },
            cyl: {
              min: "-7",
              max: "7",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "706.66",
          isMirror: null,
          thickness: "Thin Sun",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: null,
          colorCategory: "Prizm Polarized",
          transition: null,
          upc: "3793-OHw_OO4andS45",
          productCatEntryId: "3074457345618476029",
          antiScratch: true,
          color: "PRIZM Sapphire Polarized",
          offerPrice: "353.33",
          brand: "Oakley",
          insPrice: null,
          clen: "8922O",
          productUPC: "Oakley PRIZM Polarized",
          antiReflective: "Premium Sun",
        },
      },
    ],
    warrantyOptions: [
      {
        id: "754852",
        title: "One-year protection plan",
        price: "34.99000000000000198951966012828052043914794921875",
        contentIdentifier: "ciao",
      },
    ],
    lensGroup: "12_Oakley Adult RX SUN_LENSES",
  },
  /* MANDATORY lens actions, needed to save, edit and add to cart */
  actionsModule: {
    CALLERID_PDP: "PDP",
    CALLERID_CART: "CART",
    CLOSE_ACTION_CANCEL: "cancel",
    CLOSE_ACTION_SAVE: "save",
    CLOSE_ACTION_ADDTOCART: "addtocart",
    CLOSE_ACTION_APPLY: "apply",
    isVisible: false,
    isAddingToCart: false,
    callerId: null,
    selectedPerkCode: null,
    delegateLearnMoreContent: function (contentIdentifier) {
      window.alert("funzione chiamata");
    },
  },
  /* MANDATORY frame and environment data */
  data: {
    langId: "-1",
    frame: {
      catEntryId: "3074457345618488032",
      name: "OO9451 55 APPARITION",
      upc: "888392440273",
      model: "0OO9451",
      color: "945106",
      listPrice: "204.00",
      brand: "Oakley",
      category: "SUNGLASSES",
      imageUrl:
        "https://assets.lenscrafters.com/is/image/LensCrafters/888392440273__002.png",
      brandImageUrl:
        "https://assets.lenscrafters.com/extra/image/LensCrafters/brands/LC_Oakley_Logo.png",
      rxValues: null,
    },
    frameOnlyLensUPC: "99",
  },
  /* OPTIONAL to differentiate included images */
  baseURLs: {
    genericImage:
      "https://assets.lenscrafters.com/extra/image/LensCrafters/global/",
    projectImage: "https://assets.lenscrafters.com/extra/image/rxc/images/",
    framesImage: "https://assets.lenscrafters.com/is/image/LensCrafters",
    extraImages: "https://images.ray-ban.com/extra/image/rxc/brands/RayBan",
    assetsCDN: "https://assets.lenscrafters.com",
    learnMoreBaseEndpoint: "/wcs/resources/store/10851/espot/",
  },
  /* OPTIONAL to setup only when init in cart*/

  /* cartMode: {
        orderItemId: 123345, // orderitem id of the frame
        orderIndex: 0 // index of cart item
    }, */

  /* OPTIONAL to choose different translations*/
  translation: {
    language: "en_US",
  },
  /* OPTIONAL if warranty available it linsk to the warranty details page */
  linksData: {
    warrantyLearnMore: "/lc-us/purchase-care/details",
  },
  /* OPTIONAL insurance module, if not provided, insurance buttons won't be visible */
  insuranceModule: {
    _isEnabled: false /* DEV use, do not use or implement */,
    _isLoading: false /* DEV use, do not use or implement */,
    _isLogged: false /* DEV use, do not use or implement */,
    isEnabled: function () {
      return this._isEnabled;
    },
    isLoading: function () {
      return this._isLoading;
    },
    isLogged: function () {
      return this._isLogged;
    },
    getEvents: function () {
      return {
        INSURANCE_LOGIN: "insuranceLogin",
        INSURANCE_LOGOUT: "insuranceLogout",
        INSURANCE_ENABLED: "insuranceEnabled",
        INSURANCE_DISABLED: "insuranceDisabled",
      };
    },
    getInsuranceDiscounts: function (_selectedFrame, _selectedPackages) {
      //alert('Calling insurance module getDiscounts()');

      return new Promise(function (resolve, reject) {
        // Sample 30% insurance discount
        var _insurancePackages = JSON.parse(JSON.stringify(_selectedPackages));

        for (let i = 0; i < _insurancePackages.length; i++) {
          var lensListPrice = parseFloat(
            _insurancePackages[i].lensPackage.listPrice
          );
          _insurancePackages[i].lensPackage.insPrice = parseFloat(
            (lensListPrice - lensListPrice * 0.3).toFixed(2)
          );
        }

        setTimeout(function () {
          resolve(_insurancePackages);
        }, 2000);
      });
    },
    openInsurancePanel: function () {
      //if (window.confirm('Calling insurance module openInsurancePanel()')) {
      this._isLogged = true;
      this._isEnabled = true;
      window.dispatchEvent(new CustomEvent(this.getEvents().INSURANCE_ENABLED));
      //} else {
      //do nothing
      //}
    },
    removeInsuranceBenefits: function () {
      //if (window.confirm('Calling insurance module removeInsuranceBenefits()')) {
      this._isLogged = true;
      this._isEnabled = false;
      window.dispatchEvent(
        new CustomEvent(this.getEvents().INSURANCE_DISABLED)
      );
      //} else {
      //do nothing
      //}
    },
  },
  actionsModule: {
    genericAddToCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _review,
      _imagery
    ) {
      alert("Calling genericAddToCart()");
    },
    genericSaveEditFromCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _cartMode
    ) {
      alert("Calling genericSaveEditFromCart()");
    },
    genericSaveLensSelection: function (
      _frameObject,
      _lensObject,
      _warrantyObject
    ) {
      alert("Calling genericSaveLensSelection()");
    },
    loadContent: function (contentName) {
      var url = "./mock/content/" + contentName;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          var response = new Response(xhr.response, { status: 200 });

          response.json().then(function (data) {
            if (
              data.MarketingSpotData &&
              data.MarketingSpotData.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData.length >
                0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription[0].marketingText
            ) {
              let codeHtml =
                data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                  .marketingContentDescription[0].marketingText;

              resolve(codeHtml);
            }
          });
        };
        xhr.onerror = function () {
          reject(new TypeError("Local request failed"));
        };
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
      });
    },
    loadLearnMoreContent: function (contentName) {
      var url = "./mock/learnMore/" + contentName;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          var response = new Response(xhr.response, { status: 200 });

          response.json().then(function (data) {
            if (
              data.MarketingSpotData &&
              data.MarketingSpotData.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData.length >
                0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription[0].marketingText
            ) {
              let codeHtml =
                data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                  .marketingContentDescription[0].marketingText;

              resolve(codeHtml);
            }
          });
        };
        xhr.onerror = function () {
          reject(new TypeError("Local request failed"));
        };
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
      });
    },
    genericExit: function () {
      alert("RX Configurator closed correctly");
    },
    delegateLearnMoreContent: function (contentIdentifier) {
      window.alert("funzione chiamata");
    },
  },
  prescriptionModule: null,
};
