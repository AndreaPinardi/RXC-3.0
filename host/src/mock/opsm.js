import mocker from "./mocker.js";

window.config = {
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
  baseURLs: {
    genericImage: "https://media.opsm.com/RXconfiguratorV5/",
    projectImage: "https://media.opsm.com/RXconfiguratorV5/",
    framesImage: "https://assets.opsm.com/is/image/OPSM",
    assetsCDN: "https://assets.opsm.com",
  },
  brand: "opsm",
  currencyFormat: {
    thousandSeparator: ",",
    decimalSeparator: ".",
    prefix: "$",
  },
  layoutSettings: {
    enableDigitalOptometry: false,
  },
  data: {
    frame: {
      catEntryId: "113042",
      name: "RB2180VF RB2180V Optics",
      upc: "8053672395020",
      model: "",
      color: "0RX2180VF2012",
      listPrice: 185,
      offerPrice: 185,
      category: "EYEGLASSES",
      brand: "0RX2180VF",
      imageUrl:
        "https://assets.opsm.com/is/image/OPSM/8053672395020__001.png?impolicy=OP_PLP",
      brandImageUrl:
        "/wcsstore/OPSMStorefrontAssetStore/images/brand/RAY-BAN.jpg",
      rxValues: {
        powerCombinedMin: "-16.00",
        powerCombinedMax: "+10.00",
      },
    },
    frameOnlyLensUPC: "PLANO_ITEM",
    lens: {
      /* catEntryId: "test", */
    },
  },
  lensesData: {
    content: {
      polar: {},
      colorCategory: {},
      blueLight: {
        "Blue light filter": {
          title: "Blue light filter",
          imageFileName: "bluelight",
          description:
            "BlueGuard® aesthetically clear lenses designed to reduce exposure to excessive blue light emitted from digital screens and sun rays*.<BR>*BlueGuard® lenses filter up to 20% of Blue-violet light between 400-455nm",
          sequence: 0,
          contentIdentifier: null,
        },
      },
      designType: {},
      color: {
        G15: {
          title: "G15",
          imageFileName1: "Swatch__Green_Grey",
          sequence: 0,
          imageFileName2: "green-g-15-lens",
        },
        Grey: {
          title: "Grey",
          imageFileName1: "Swatch__Solid_Grey",
          sequence: 0,
          imageFileName2: "grey-lens",
        },
        Brown: {
          title: "Brown",
          imageFileName1: "Swatch__L019C",
          sequence: 0,
          imageFileName2: "brown-lens",
        },
        "G-15": {
          title: "G-15",
          imageFileName1: "Swatch__Green_Grey",
          sequence: 0,
          imageFileName2: "Swatch__Green_Grey",
        },
      },
      brand: {
        "Ray-Ban": {
          title: "Ray-Ban Authentic lenses",
          imageFileName: "rayban_lenses",
          description:
            "Authentic Ray-Ban lenses are customised to your vision needs and certified with the etched Ray-Ban signature logos.",
          sequence: 0,
          contentIdentifier: null,
        },
        OPSM: {
          title: "OPSM Lenses",
          imageFileName: "opsm_lenses",
          description: "Premium quality scratch resistant lenses.",
          sequence: 2,
          contentIdentifier: null,
        },
      },
      thickness: {
        "Enhanced - Plastic": {
          title: "Enhanced – Plastic",
          imageFileName: "thickness_plastic",
          description:
            "An entry level everyday lens recommended for light prescriptions (up to +2.00 to -2.00).",
          sequence: 0,
          contentIdentifier: null,
          badge: "",
        },
        "Superior - High Index": {
          title: "Superior - High Index",
          imageFileName: "thickness_superior",
          description:
            "A thinner, flatter and lighter premium lens, with anti-reflection protection. Ideal for all prescriptions but recommended for medium to high prescriptions (Above +4.00 or below -4.00).",
          sequence: 2,
          contentIdentifier: null,
          badge: "",
        },
        "Premium - Thin": {
          title: "Premium - Thin",
          imageFileName: "thickness_thin",
          description:
            "A lightweight and impact protected lens. Recommended for light to moderate prescriptions (up to +4.00 to -4.00).",
          sequence: 1,
          contentIdentifier: null,
          badge: "",
        },
        "Ultimate - Ultra High Index": {
          title: "Ultimate – Ultra High Index",
          imageFileName: "thickness_ultimate",
          description:
            "An ultra-thin and light lens, with anti-reflection protection. Ideal for all prescriptions but recommended for medium to high prescriptions (Above +4.00 or below -4.00).",
          sequence: 3,
          contentIdentifier: null,
          badge: "",
        },
      },
      transition: {
        "Transition Gen8": {
          title: "Transitions® Gen8™",
          imageFileName: "transitions",
          description:
            "Quickly darkens when exposure to sunlight and fades back to clear. This is a great option for active lifestyles.",
          sequence: 1,
          contentIdentifier: null,
        },
      },
      antiReflective: {
        Premium_UV: {
          title: "Premium anti-reflection with UV protection",
          imageFileName: "premium_uv",
          description:
            "Invisibles® UV Anti-Reflection Coating<BR>All the benefits of Invisibles® Ultra plus protection from UV rays reflecting off the back surface of the lens.",
          sequence: 1,
          contentIdentifier: null,
        },
        Premium: {
          title: "Premium anti-reflection",
          imageFileName: "premium",
          description:
            "Invisibles® Ultra Anti-Reflection Coating<BR>For enhanced scratch resistance, it also repels water and oil to prevent smudges on the back-surface, keeping your lenses cleaner for longer.",
          sequence: 0,
          contentIdentifier: null,
        },
      },
      type: {
        "Frame Only": {
          title: "Frame only",
          imageFileName: "frame-only",
          description: "Without prescription lenses.",
          sequence: 4,
        },
        SINGLE_VISION: {
          title: "Single Vision",
          imageFileName: "single_vision",
          description:
            "Corrects one field of vision: near, intermediate or far.",
          sequence: 2,
        },
        progressive: {
          title: "progressive",
          imageFileName: "progressive",
          description:
            "Corrects one field of vision: near, intermediate or far.",
          sequence: 3,
        },
        Reading: {
          title: "Reading",
          description: "Reading",
          imageFileName: "Reading",
          sequence: 1,
        },
        Distance: {
          title: "Distance",
          description: "Distance",
          imageFileName: "Distance",
          sequence: 0,
        },
      },
    },
    packages: [
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213707",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "progressive",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 320,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "RB_1_50_Bluelight_Premium_UV_SV",
          productCatEntryId: "3074457345617213671",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 320,
          insPrice: 320,
          brand: "Ray-Ban",
          productUPC: "RB_1_50_Bluelight_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117754",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 250,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Brown_SV",
          productCatEntryId: "3074457345617117677",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 250,
          insPrice: 250,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Brown",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117775",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 240,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Blue_Guard_SV",
          productCatEntryId: "3074457345617117698",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 240,
          insPrice: 240,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Blue_Guard",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117758",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 350,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Grey_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117681",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 350,
          insPrice: 350,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Grey_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117760",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 190,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Clear_SV",
          productCatEntryId: "3074457345617117683",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 190,
          insPrice: 190,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Clear",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617120171",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: false,
          lensMaterial: "Ultra High Index",
          listPrice: 580,
          isMirror: false,
          lensClass: null,
          thickness: "Ultimate - Ultra High Index",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_74_STD_Ultra_Hi_Index_Trans_Gen8_Grey_Invisibles_UV_SV",
          productCatEntryId: "3074457345617120169",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 580,
          insPrice: 580,
          brand: "OPSM",
          productUPC: "1_74_STD_Ultra_Hi_Index_Trans_Gen8_Grey_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213698",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 400,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_50_Trans_Gen8_G15_Premium_UV_SV",
          productCatEntryId: "3074457345617213678",
          antiScratch: true,
          lensColorCode: "green-g-15-lens",
          color: "G15",
          suitableForDriving: false,
          offerPrice: 400,
          insPrice: 400,
          brand: "Ray-Ban",
          productUPC: "RB_1_50_Trans_Gen8_G15_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117774",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 270,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Blue_Guard_Invisibles_Ultra_UV_SV",
          productCatEntryId: "3074457345617117697",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 270,
          insPrice: 270,
          brand: "OPSM",
          productUPC: "1_50_STD_Blue_Guard_Invisibles_Ultra_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117765",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 450,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Brown_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117688",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 450,
          insPrice: 450,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Brown_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213716",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Superior - High Index",
          listPrice: 370,
          isMirror: false,
          lensClass: null,
          thickness: "Superior - High Index",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "RB_1_67_Hi_Index_Clear_Premium_UV_SV",
          productCatEntryId: "3074457345617213686",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 370,
          insPrice: 370,
          brand: "Ray-Ban",
          productUPC: "RB_1_67_Hi_Index_Clear_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213697",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 270,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "RB_1_50_Clear_Premium_UV_SV",
          productCatEntryId: "3074457345617213674",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 270,
          insPrice: 270,
          brand: "Ray-Ban",
          productUPC: "RB_1_50_Clear_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117762",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 320,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Clear_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117685",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 320,
          insPrice: 320,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Clear_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: null,
          catEntryId: "3074457345617118669",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "Frame Only",
          uvProtection: false,
          lensMaterial: null,
          listPrice: 0,
          isMirror: false,
          lensClass: null,
          thickness: null,
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "PLANO_ITEM",
          productCatEntryId: "3074457345617118668",
          antiScratch: false,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 0,
          insPrice: 0,
          brand: "OPSM",
          productUPC: "PLANO",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117776",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 340,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Blue_Guard_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117699",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 340,
          insPrice: 340,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Blue_Guard_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117778",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "High Index",
          listPrice: 400,
          isMirror: false,
          lensClass: null,
          thickness: "Superior - High Index",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_67_STD_Hi_Index_Blue_Guard_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117701",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 400,
          insPrice: 400,
          brand: "OPSM",
          productUPC: "1_67_STD_Hi_Index_Blue_Guard_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117769",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "High Index",
          listPrice: 350,
          isMirror: false,
          lensClass: null,
          thickness: "Superior - High Index",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_67_STD_Hi_Index_Clear_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117692",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 350,
          insPrice: 350,
          brand: "OPSM",
          productUPC: "1_67_STD_Hi_Index_Clear_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213709",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 340,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "RB_1_59_Poly_Clear_Premium_UV_SV",
          productCatEntryId: "3074457345617213690",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 340,
          insPrice: 340,
          brand: "Ray-Ban",
          productUPC: "RB_1_59_Poly_Clear_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117770",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "High Index",
          listPrice: 480,
          isMirror: false,
          lensClass: null,
          thickness: "Superior - High Index",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_67_STD_Hi_Index_Trans_Gen8_Grey_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117693",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 480,
          insPrice: 480,
          brand: "OPSM",
          productUPC: "1_67_STD_Hi_Index_Trans_Gen8_Grey_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617120170",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: false,
          lensMaterial: "Ultra High Index",
          listPrice: 450,
          isMirror: false,
          lensClass: null,
          thickness: "Ultimate - Ultra High Index",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_74_STD_Ultra_Hi_Index_Clear_Invisibles_UV_SV",
          productCatEntryId: "3074457345617120168",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 450,
          insPrice: 450,
          brand: "OPSM",
          productUPC: "1_74_STD_Ultra_Hi_Index_Clear_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117761",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 290,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Clear_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117684",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 290,
          insPrice: 290,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Clear_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213712",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 470,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_59_Trans_Gen8_Grey_Premium_UV_SV",
          productCatEntryId: "3074457345617213688",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 470,
          insPrice: 470,
          brand: "Ray-Ban",
          productUPC: "RB_1_59_Trans_Gen8_Grey_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213710",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 390,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "RB_1_59_Bluelight_Premium_UV_SV",
          productCatEntryId: "3074457345617213691",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 390,
          insPrice: 390,
          brand: "Ray-Ban",
          productUPC: "RB_1_59_Bluelight_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117772",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 170,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Blue_Guard_SV",
          productCatEntryId: "3074457345617117695",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 170,
          insPrice: 170,
          brand: "OPSM",
          productUPC: "1_50_STD_Blue_Guard",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117757",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 250,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Grey_SV",
          productCatEntryId: "3074457345617117680",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 250,
          insPrice: 250,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Grey",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117752",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: false,
          lensMaterial: "Plastic",
          listPrice: 220,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Clear_Invisible_Ultra_HC_SV",
          productCatEntryId: "3074457345617117675",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 220,
          insPrice: 220,
          brand: "OPSM",
          productUPC: "1_50_STD_Clear_Invisible_Ultra_HC",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117763",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 320,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Brown_SV",
          productCatEntryId: "3074457345617117686",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 320,
          insPrice: 320,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Brown",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117756",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 380,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Brown_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117679",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 380,
          insPrice: 380,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Brown_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117777",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 370,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_59_STD_Poly_Blue_Guard_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117700",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 370,
          insPrice: 370,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Blue_Guard_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117764",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 420,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Brown_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117687",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 420,
          insPrice: 420,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Brown_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213711",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 400,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_50_Trans_Gen8_Grey_Premium_UV_SV",
          productCatEntryId: "3074457345617213687",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 400,
          insPrice: 400,
          brand: "Ray-Ban",
          productUPC: "RB_1_50_Trans_Gen8_Grey_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117759",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 380,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Grey_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117682",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 380,
          insPrice: 380,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Grey_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117767",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 420,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Grey_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117690",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 420,
          insPrice: 420,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Grey_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213699",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 400,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_50_Trans_Gen8_B15_Premium_UV_SV",
          productCatEntryId: "3074457345617213673",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 400,
          insPrice: 400,
          brand: "Ray-Ban",
          productUPC: "RB_1_50_Trans_Gen8_B15_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117755",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 350,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_50_STD_Trans_Gen8_Brown_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117678",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 350,
          insPrice: 350,
          brand: "OPSM",
          productUPC: "1_50_STD_Trans_Gen8_Brown_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117766",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 320,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Grey_SV",
          productCatEntryId: "3074457345617117689",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 320,
          insPrice: 320,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Grey",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117773",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Plastic",
          listPrice: 270,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Blue_Guard_Invisibles_Ultra_SV",
          productCatEntryId: "3074457345617117696",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 270,
          insPrice: 270,
          brand: "OPSM",
          productUPC: "1_50_STD_Blue_Guard_Invisibles_Ultra",
          antiReflective: "Premium",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117768",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 450,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "1_59_STD_Poly_Trans_Gen8_Grey_Invisibles_UV_SV",
          productCatEntryId: "3074457345617117691",
          antiScratch: true,
          lensColorCode: "color-grey",
          color: "Grey",
          suitableForDriving: false,
          offerPrice: 450,
          insPrice: 450,
          brand: "OPSM",
          productUPC: "1_59_STD_Poly_Trans_Gen8_Grey_Invisibles_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213714",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Superior - High Index",
          listPrice: 420,
          isMirror: false,
          lensClass: null,
          thickness: "Superior - High Index",
          isBaseLens: false,
          polar: null,
          blueLight: "Blue light filter",
          colorCategory: null,
          transition: null,
          upc: "RB_1_67_Bluelight_Premium_UV_SV",
          productCatEntryId: "3074457345617213684",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 420,
          insPrice: 420,
          brand: "Ray-Ban",
          productUPC: "RB_1_67_Bluelight_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213713",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 470,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_59_Poly_Trans_Gen8_G15_Premium_UV_SV",
          productCatEntryId: "3074457345617213685",
          antiScratch: true,
          lensColorCode: "green-g-15-lens",
          color: "G15",
          suitableForDriving: false,
          offerPrice: 470,
          insPrice: 470,
          brand: "Ray-Ban",
          productUPC: "RB_1_59_Poly_Trans_Gen8_G15_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617213715",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: true,
          lensMaterial: "Polycarbonate",
          listPrice: 470,
          isMirror: false,
          lensClass: null,
          thickness: "Premium - Thin",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: "Transition Gen8",
          upc: "RB_1_59_Trans_Gen8_B15_Premium_UV_SV",
          productCatEntryId: "3074457345617213689",
          antiScratch: true,
          lensColorCode: "color-brown",
          color: "Brown",
          suitableForDriving: false,
          offerPrice: 470,
          insPrice: 470,
          brand: "Ray-Ban",
          productUPC: "RB_1_59_Trans_Gen8_B15_Premium_UV",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117751",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: false,
          lensMaterial: "Plastic",
          listPrice: 120,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Clear_HC_SV",
          productCatEntryId: "3074457345617117674",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 120,
          insPrice: 120,
          brand: "OPSM",
          productUPC: "1_50_STD_Clear_HC",
          antiReflective: null,
          bundleName: null,
          recommendedUse: null,
        },
      },
      {
        frame: { offerPrice: 185, insPrice: 185, promoType: null },
        lensPackage: {
          designType: "Standard",
          catEntryId: "3074457345617117753",
          insurable: false,
          rxValues: {
            add: {
              min: "+0.75",
              max: "+3.50",
            },
            cyl: {
              min: "-4.00",
              max: "+4.00",
            },
            sph: {
              min: "-6.00",
              max: "+5.25",
            },
          },
          type: "SINGLE_VISION",
          uvProtection: false,
          lensMaterial: "Plastic",
          listPrice: 250,
          isMirror: false,
          lensClass: null,
          thickness: "Enhanced - Plastic",
          isBaseLens: false,
          polar: null,
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "1_50_STD_Clear_Invisible_UV_HC_SV",
          productCatEntryId: "3074457345617117676",
          antiScratch: true,
          lensColorCode: null,
          color: null,
          suitableForDriving: false,
          offerPrice: 250,
          insPrice: 250,
          brand: "OPSM",
          productUPC: "1_50_STD_Clear_Invisible_UV_HC",
          antiReflective: "Premium_UV",
          bundleName: null,
          recommendedUse: null,
        },
      },
    ],
    warrantyOptions: [
      {
        id: "18919943",
        title: "Eyewear Protection Plan",
        price: "35",
        description:
          '<p data-pm-slice="1 1 [&quot;table&quot;,{&quot;isNumberColumnEnabled&quot;:false,&quot;layout&quot;:&quot;full-width&quot;,&quot;__autoSize&quot;:false,&quot;localId&quot;:&quot;d921c765-3972-4917-ac67-40daebdb00b6&quot;},&quot;tableRow&quot;,{},&quot;tableCell&quot;,{&quot;colspan&quot;:1,&quot;rowspan&quot;:1,&quot;colwidth&quot;:[536],&quot;background&quot;:null}]">Cover your eyewear with a Protection Plan including unlimited repair and replacement at LensCrafters stores.',
        contentIdentifier: "X_WHATS_MORE",
      },
    ],
    lensGroup: null,
  },
  paymentInstallment: {
    type: "affirm",
    installments: 3,
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
  selector: "#rxcApp",
  translation: {
    language: "en_US",
    brand: "GL",
  },
  unbrandedFrameImages: {
    rayban: {
      default:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
      unbranded:
        "https://assets.glasses.com/extra/image/rxc/frames/#MO#__#CO#__RXP__nologo__qt.png?impolicy=GL_parameters_transp&width=860",
      rayban:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
    },
    raybanjr: {
      default:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
      unbranded:
        "https://assets.glasses.com/extra/image/rxc/frames/#MO#__#CO#__RXP__nologo__qt.png?impolicy=GL_parameters_transp&width=860",
      rayban:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
    },
    oakley: {
      default:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
      unbranded:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
      oakley:
        "https://assets.glasses.com/extra/image/rxc/frames/#MO#__#CO#__RXP__logo__qt.png?impolicy=GL_parameters_transp&width=860",
    },
    default: {
      default:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
      unbranded:
        "https://assets.glasses.com/extra/image/Glasses/#PARTNUMBER#__002.png?impolicy=GL_parameters_transp&width=860",
    },
  },
  dynamicPromoModule: {
    getDiscount: function (_selectedFrame, _selectedData) {
      return new Promise(function (resolve, reject) {
        let selectedFrame = {
          ..._selectedFrame,
          offerPrice: _selectedFrame.offerPrice,
        };
        let selectedData = {
          ..._selectedData,
          lensPackage: {
            ..._selectedData.lensPackage,
            offerPrice: _selectedData.lensPackage.offerPrice,
          },
          frame: {
            ..._selectedData.frame,
            offerPrice: _selectedData.frame.offerPrice,
          },
        };

        let data = {
          storeId: 10151,
          langId: -1,
          catentries:
            _selectedFrame.catEntryId +
            "," +
            _selectedData.lensPackage.catEntryId,
          reqType: "ajax",
        };
        return $.ajax({
          url: "/AjaxSimulateOrderPromotion",
          data: data,
          type: "GET",
          dataType: "json",
          crossDomain: true,
          success: function (response) {
            if (response[_selectedFrame.catEntryId + ""] !== undefined) {
              selectedData.frame.offerPrice =
                response[_selectedFrame.catEntryId + ""];
              selectedFrame.offerPrice =
                response[_selectedFrame.catEntryId + ""];
            }

            if (
              response[_selectedData.lensPackage.catEntryId + ""] !== undefined
            ) {
              selectedData.lensPackage.offerPrice =
                response[_selectedData.lensPackage.catEntryId + ""];
            }

            resolve({
              frame: selectedFrame,
              lensesData: selectedData,
            });
          },
        });
      });
    },
  },
  prescriptionModule: mocker().prescriptionModule,
};
