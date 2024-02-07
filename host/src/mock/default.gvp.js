window.config = {
  /* MANDATORY div to anchor the component */
  selector: "#rxcApp",
  currencyFormat: {
    thousandSeparator: ",",
    decimalSeparator: ".",
    prefix: "$",
  },
  /* MANDATORY lens data, example format https://rxc.luxottica.com/dev/v3.0.0/standalone/mock/lenses/eyeLensesMockResponse.json */
  lensesData: {
    content: {
      polar: {},
      colorCategory: {},
      blueLight: {
        "Blue light treatment": {
          imageFileName: "blue-light",
          title: "Blue light filtering",
          sequence: 0,
          description:
            "Reduces exposure to blue light from digital screens and sun rays, which can help prevent eye-fatigue.",
          contentIdentifier: "Treatment_Blue",
        },
      },
      designType: {
        Tuned: {
          title: "LensCrafters lenses",
          imageFileName: "single-vision",
          description:
            "Premium quality and scratch-resistant lenses, with anti-reflective coating included. ",
          sequence: 2,
          contentIdentifier: null,
          type: null,
        },
      },
      color: {
        Sapphire: {
          title: "Sapphire",
          imageFileName1: "color-sapphire",
          sequence: 0,
          imageFileName2: "sapphire-lens",
        },
        Emerald: {
          title: "Emerald",
          imageFileName1: "color-emerald",
          sequence: 0,
          imageFileName2: "emerald-lens",
        },
        Grey: {
          title: "Grey",
          imageFileName1: "grey-lens",
          sequence: 0,
          imageFileName2: "grey-lens",
        },
        Amethyst: {
          title: "Amethyst",
          imageFileName1: "color-amethist",
          sequence: 0,
          imageFileName2: "amethyst-lens",
        },
        Amber: {
          title: "Amber",
          imageFileName1: "color-amber",
          sequence: 0,
          imageFileName2: "amber-lens",
        },
        Brown: {
          title: "Brown",
          imageFileName1: "color-brown",
          sequence: 0,
          imageFileName2: "brown-lens",
        },
      },
      treatment: {
        "Scratch-resistant": {
          title: "Scratch-resistant treatment",
          imageFileName: "treatment-scratch",
          description: "Hard coating that protects from scratches.",
          sequence: 0,
          contentIdentifier: null,
        },
        "Blue Light": {
          title: "Blue light treatment",
          imageFileName: "blue-light",
          description:
            "Reduces exposure to blue light from digital screens and sun rays, which can help prevent eye-fatigue.",
          sequence: 2,
          contentIdentifier: "Treatment_Blue",
        },
        "Transitions with Standard AR": {
          title: "With Transitions® Signature® GEN 8™",
          imageFileName: "transition-signature",
          description:
            "Quickly darkens when exposed to sunlight and fades back to clear. This means two glasses in one so that you don’t have to change glasses indoors and outdoors.",
          sequence: 3,
          contentIdentifier: "Treatment_Transition_Signature",
        },
        "Classic Anti-reflective": {
          title: "Classic Anti-reflective",
          imageFileName: "ar-classic",
          description:
            "Eliminates unwanted reflections and is scratch resistant.",
          sequence: 1,
          contentIdentifier: "Treatment_Anti_Rreflective_Classic",
        },
        "Blue Light with Standard AR": {
          title: "Blue light treatment with standard anti-reflective",
          imageFileName: "blue-light",
          description:
            "Reduces exposure to blue light from digital screens and sun rays, which can help prevent eye-fatigue.",
          sequence: 3,
          contentIdentifier: "Treatment_Blue",
        },
      },
      transition: {
        XtrActive: {
          imageFileName: "transition-xtractive",
          title: "Transitions® XTRActive®",
          sequence: 0,
          description:
            "Darkens and fades back to clear within seconds, even behind the windshield of a car, blocking 100% of UV rays and giving you two glasses in one without needing to switch.",
          contentIdentifier: null,
        },
        Signature: {
          imageFileName: "transition-signature",
          title: "Transitions® Signature® GEN 8™",
          sequence: 0,
          description:
            "Quickly darkens when exposed to sunlight and fades back to clear. This means two glasses in one so that you don’t have to change glasses indoors and outdoors.",
          contentIdentifier: "Treatment_Transition_Signature",
        },
      },
      thickness: {
        Slim: {
          imageFileName: "slim",
          title: "Enhanced - Slim",
          sequence: 1,
          description:
            "Plastic, designed to fit your frame, instant visual sharpness, ideal for light prescriptions. (Prescription ranges: +2.00 to -2.00)",
          contentIdentifier: "Thickness_Slim",
          badge: null,
        },
        Thin: {
          imageFileName: "thin",
          title: "Premium - Thin",
          sequence: 2,
          description:
            "Polycarbonate, impact resistant lens, suitable for light to moderate prescriptions. \u000b(Prescription ranges: +4.00 to -4.00)",
          contentIdentifier: "Thickness_Thin",
          badge: "Our Most Popular Choice",
        },
        "Extra thin": {
          imageFileName: "extra-thin",
          title: "Superior - Extra thin",
          sequence: 3,
          description:
            "The thinnest lens, ideal for all prescriptions, recommended for strong ones. \n(Prescription ranges: Above +4.00 or below -4.00)",
          contentIdentifier: "Thickness_Extra_Thin",
          badge: null,
        },
      },
      brand: {
        LensCrafters: {
          imageFileName: "lenscrafters-lens",
          title: "LensCrafters lenses",
          sequence: 2,
          description:
            "Premium quality and scratch-resistant lenses, crafted with top of the range technology.",
          contentIdentifier: "Brand_LensCrafter",
        },
      },
      antiReflective: {
        Standard: {
          imageFileName: "ar-classic",
          title: "Add anti-smudge treatment",
          sequence: 1,
          description:
            "Eliminates unwanted reflections and is scratch resistant.",
          contentIdentifier: "Treatment_Anti_Rreflective_Classic",
        },
        Premium: {
          imageFileName: "ar-premium",
          title: "Anti-smudge and water resistant treatments",
          sequence: 2,
          description:
            "Repels water and oil to prevent smudges, keeping your lenses cleaner for longer.",
          contentIdentifier: "Treatment_Anti_Rreflective_Premium",
        },
      },
      type: {
        "Single Vision": {
          imageFileName: "single-vision",
          title: "Single Vision",
          sequence: 1,
          description: "Corrects near, intermediate or far-sightedness",
        },
        "Frame Only": {
          imageFileName: "frame-only",
          title: "Frame only",
          sequence: 4,
          description: "Just the frames, without adding lenses or treatments.",
        },
        Progressive: {
          imageFileName: "progressive",
          title: "Progressive",
          sequence: 2,
          description:
            "Corrects both near and far-sightedness, so you don’t have to switch glasses.",
        },
      },
    },
    packages: [
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
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
          promoTypeDetail: "GVP",
          offerPrice: "99.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Scratch-resistant",
          catEntryId: "917186",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-16",
              max: "10",
            },
            cyl: {
              min: "-12",
              max: "12",
            },
            add: null,
          },
          uvProtection: false,
          listPrice: "148.34",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: true,
          polar: null,
          treatmentGroup: "includedGvp",
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "5001-00_SKU",
          productCatEntryId: "917180",
          antiScratch: true,
          color: null,
          offerPrice: "0.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "5001-00",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Classic Anti-reflective",
          catEntryId: "1022702",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "6",
            },
            cyl: {
              min: "-3",
              max: "3",
            },
            add: null,
          },
          uvProtection: false,
          listPrice: "231.67",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "antiReflective",
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "5011-00_SKU",
          productCatEntryId: "1022701",
          antiScratch: true,
          color: null,
          offerPrice: "149.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "5011-00",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Scratch-resistant",
          catEntryId: "18269942",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-16",
              max: "12",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "215.00",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: "includedGvp",
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "3001-00_SKU",
          productCatEntryId: "18269941",
          antiScratch: true,
          color: null,
          offerPrice: "179.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "3001-00",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Blue Light",
          catEntryId: "18331944",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-8",
              max: "4",
            },
            cyl: {
              min: "-2",
              max: "2",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "281.66",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "blueLight",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: null,
          upc: "3064-65_SKU",
          productCatEntryId: null,
          antiScratch: true,
          color: null,
          offerPrice: "219.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: null,
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Classic Anti-reflective",
          catEntryId: "18398444",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-8",
              max: "6",
            },
            cyl: {
              min: "-4",
              max: "4",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "298.34",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "antiReflective",
          blueLight: null,
          colorCategory: null,
          transition: null,
          upc: "3011-65_SKU",
          productCatEntryId: "18398443",
          antiScratch: true,
          color: null,
          offerPrice: "229.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "3011-65",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Blue Light with Standard AR",
          catEntryId: "18398448",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "10",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: false,
          listPrice: "298.34",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "blueLight",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: null,
          upc: "5064-00_S15_SKU",
          productCatEntryId: "18398447",
          antiScratch: true,
          color: null,
          offerPrice: "189.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "5064-00_S15",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Blue Light with Standard AR",
          catEntryId: "18398452",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "365.00",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "blueLight",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: null,
          upc: "3164-65_SKU",
          productCatEntryId: "18398451",
          antiScratch: true,
          color: null,
          offerPrice: "269.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "3164-65",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Blue Light",
          catEntryId: "1421013",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "10",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: false,
          listPrice: "215.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "blueLight",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: null,
          upc: "5064.00_SKU",
          productCatEntryId: "1421012",
          antiScratch: true,
          color: null,
          offerPrice: "139.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "5064.00",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Transitions with Standard AR",
          catEntryId: "18463442",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "480.01",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "transition",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "30T1-65_S15_GVP",
          productCatEntryId: "18463441",
          antiScratch: true,
          color: "Grey",
          offerPrice: "329.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "GVP Poly Transitions® GEN 8™ Lens SAR",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: "GVP",
          offerPrice: "123.00",
          insPrice: null,
          promoType: "GVP",
        },
        lensPackage: {
          designType: "Tuned",
          treatment: "Transitions with Standard AR",
          catEntryId: "18463443",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "480.01",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: "transition",
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "30T2-65_S15_GVP",
          productCatEntryId: "18463441",
          antiScratch: true,
          color: "Brown",
          offerPrice: "329.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "GVP Poly Transitions® GEN 8™ Lens SAR",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750442",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "630.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A2-FE_S15_SKU",
          productCatEntryId: "18750441",
          antiScratch: true,
          color: "Grey",
          offerPrice: "378.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.50 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750443",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "630.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A3-FE_S15_SKU",
          productCatEntryId: "18750441",
          antiScratch: true,
          color: "Brown",
          offerPrice: "378.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.50 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750445",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "546.67",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A2-FE_SKU",
          productCatEntryId: "18750444",
          antiScratch: true,
          color: "Grey",
          offerPrice: "328.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.50 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750446",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "546.67",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A3-FE_SKU",
          productCatEntryId: "18750444",
          antiScratch: true,
          color: "Brown",
          offerPrice: "328.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.50 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750448",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "746.67",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-FE_S43_SKU",
          productCatEntryId: "18750447",
          antiScratch: true,
          color: "Grey",
          offerPrice: "448.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750449",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "746.67",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-FE_S43_SKU",
          productCatEntryId: "18750447",
          antiScratch: true,
          color: "Brown",
          offerPrice: "448.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750451",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "696.67",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-FE_S15_SKU",
          productCatEntryId: "18750450",
          antiScratch: true,
          color: "Grey",
          offerPrice: "418.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750452",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "696.67",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-FE_S15_SKU",
          productCatEntryId: "18750450",
          antiScratch: true,
          color: "Brown",
          offerPrice: "418.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750454",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "613.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-FE_SKU",
          productCatEntryId: "18750453",
          antiScratch: true,
          color: "Grey",
          offerPrice: "368.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750455",
          insurable: true,
          type: "Progressive",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "613.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-FE_SKU",
          productCatEntryId: "18750453",
          antiScratch: true,
          color: "Brown",
          offerPrice: "368.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "PG AVP 1.59 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750463",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "413.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T0-00_S15_SKU",
          productCatEntryId: "18750462",
          antiScratch: true,
          color: "Emerald",
          offerPrice: "248.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750464",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "413.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T4-00_S15_SKU",
          productCatEntryId: "18750462",
          antiScratch: true,
          color: "Amber",
          offerPrice: "248.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750465",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "413.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T5-00_S15_SKU",
          productCatEntryId: "18750462",
          antiScratch: true,
          color: "Sapphire",
          offerPrice: "248.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750466",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "413.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T8-00_S15_SKU",
          productCatEntryId: "18750462",
          antiScratch: true,
          color: "Amethyst",
          offerPrice: "248.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750468",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "330.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T0-00_SKU",
          productCatEntryId: "18750467",
          antiScratch: true,
          color: "Emerald",
          offerPrice: "198.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750469",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "330.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T4-00_SKU",
          productCatEntryId: "18750467",
          antiScratch: true,
          color: "Amber",
          offerPrice: "198.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750470",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "330.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T5-00_SKU",
          productCatEntryId: "18750467",
          antiScratch: true,
          color: "Sapphire",
          offerPrice: "198.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750471",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10.5",
              max: "9",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "330.00",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "Signature",
          upc: "50T8-00_SKU",
          productCatEntryId: "18750467",
          antiScratch: true,
          color: "Amethyst",
          offerPrice: "198.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC: "SV 1.50 Transitions GEN8 Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750473",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "446.67",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A2-00_S15_SKU",
          productCatEntryId: "18750472",
          antiScratch: true,
          color: "Grey",
          offerPrice: "268.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.50 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750474",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "446.67",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A3-00_S15_SKU",
          productCatEntryId: "18750472",
          antiScratch: true,
          color: "Brown",
          offerPrice: "268.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.50 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750476",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "363.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A2-00_SKU",
          productCatEntryId: "18750475",
          antiScratch: true,
          color: "Grey",
          offerPrice: "218.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.50 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750477",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "363.33",
          isMirror: null,
          thickness: "Slim",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "50A3-00_SKU",
          productCatEntryId: "18750475",
          antiScratch: true,
          color: "Brown",
          offerPrice: "218.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.50 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750498",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "563.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-65_S43_SKU",
          productCatEntryId: "18750497",
          antiScratch: true,
          color: "Grey",
          offerPrice: "338.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750499",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "563.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-65_S43_SKU",
          productCatEntryId: "18750497",
          antiScratch: true,
          color: "Brown",
          offerPrice: "338.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750501",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "513.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-65_S15_SKU",
          productCatEntryId: "18750500",
          antiScratch: true,
          color: "Grey",
          offerPrice: "308.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750502",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "513.33",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: false,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-65_S15_SKU",
          productCatEntryId: "18750500",
          antiScratch: true,
          color: "Brown",
          offerPrice: "308.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Standard Anti-Reflective",
          antiReflective: "Standard",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750504",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "430.00",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A2-65_SKU",
          productCatEntryId: "18750503",
          antiScratch: true,
          color: "Grey",
          offerPrice: "258.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750505",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "430.00",
          isMirror: null,
          thickness: "Thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "30A3-65_SKU",
          productCatEntryId: "18750503",
          antiScratch: true,
          color: "Brown",
          offerPrice: "258.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.59 XtrActive New Generation Without Anti-Reflective",
          antiReflective: null,
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750518",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "688.33",
          isMirror: null,
          thickness: "Extra thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "63A2-00_S43_SKU",
          productCatEntryId: "18750517",
          antiScratch: true,
          color: "Grey",
          offerPrice: "413.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.67 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
      {
        frame: {
          promoTypeDetail: null,
          offerPrice: "123.00",
          insPrice: null,
          promoType: null,
        },
        lensPackage: {
          designType: "Tuned",
          treatment: null,
          catEntryId: "18750519",
          insurable: true,
          type: "Single Vision",
          rxValues: {
            sph: {
              min: "-10",
              max: "8",
            },
            cyl: {
              min: "-9",
              max: "9",
            },
            add: null,
          },
          uvProtection: true,
          listPrice: "688.33",
          isMirror: null,
          thickness: "Extra thin",
          isBaseLens: true,
          polar: null,
          treatmentGroup: null,
          blueLight: "Blue light treatment",
          colorCategory: null,
          transition: "XtrActive",
          upc: "63A3-00_S43_SKU",
          productCatEntryId: "18750517",
          antiScratch: true,
          color: "Brown",
          offerPrice: "413.00",
          brand: "LensCrafters",
          insPrice: null,
          clen: null,
          productUPC:
            "SV 1.67 XtrActive New Generation Premium Anti-Reflective",
          antiReflective: "Premium",
        },
      },
    ],
    warrantyOptions: [
      {
        id: "754852",
        title: "One-year protection plan",
        price: "34.99000000000000198951966012828052043914794921875",
      },
    ],
    lensGroup: "1_Adult Rx OPH_GVP_LENSES",
  },
  /* MANDATORY lens actions, needed to save, edit and add to cart */
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
    loadLearnMoreContent: function (_loadMoreContentName) {
      // see Learn more section content retrieval
    },
    genericExit: function () {
      // optional function to trigger events on configurator closure
    },
    delegateLearnMoreContent: function (contentIdentifier) {
      window.alert("funzione chiamata");
    },
  },
  /* MANDATORY frame and environment data */
  data: {
    langId: "-1",
    frame: {
      catEntryId: "1796173",
      name: "AX1036",
      upc: "7895653177901",
      model: "0AX1036",
      color: "6088",
      listPrice: "123.00",
      brand: "Armani Exchange",
      category: "EYEGLASSES",
      imageUrl:
        "https://assets.lenscrafters.com/is/image/LensCrafters/7895653177901__002.png",
      brandImageUrl:
        "https://assets.lenscrafters.com/extra/image/LensCrafters/brands/LC_Armani_Exchange_Logo.png",
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
  prescriptionModule: {
    prescriptionType: "FULL", // or FULL, case of Glasses.com after lens type selection
    prescriptionFlows: ["MANUAL"], //'MANUAL','ACCOUNT','UPLOAD','CMD'
    loadPrescription: function () {
      var _prescriptionObject = null;

      return new Promise(function (resolve, reject) {
        var value = null;
        var name = "_prescriptionObject=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
          }
        }

        if (value) {
          try {
            _prescriptionObject = JSON.parse(value);

            alert(
              "Calling loadPrescription()\n\nPrescription object: " +
                JSON.stringify(_prescriptionObject)
            );
            // validation is run by the configuration agains the return object
            resolve(_prescriptionObject);
          } catch (e) {
            console.log(e);
            reject();
          }
        } else {
          resolve(null);
        }
      });
    },

    savePrescription: function (_prescriptionObject) {
      alert(
        "Calling savePrescription()\n\nPrescription object: " +
          JSON.stringify(_prescriptionObject)
      );
      //sample cookie saving
      document.cookie =
        "_prescriptionObject=" + JSON.stringify(_prescriptionObject);

      return true; // or false if failure
    },

    // if no lenses are available against the prescription filtering, this function is called to retrieve the frames filtered PLP URL to link in the dedicated CTA "see available frames"
    // the PLP must be of the same category of the frame
    // if no URL is returned, then the user won't see the CTA
    checkAvailableFrames: function (_frame, _prescriptionObject) {
      alert(
        "Calling checkAvailableFrames().\n\nFrame object: " +
          JSON.stringify(_frame) +
          "\n\nPrescription object: " +
          JSON.stringify(_prescriptionObject)
      );
      //var filteredFramesURL = "/lc-us/sunglasses";
      var filteredFramesURL = null;
      return filteredFramesURL;
    },

    // it removes the cookie information
    clearPrescription: function () {
      document.cookie = "_prescriptionObject=; Max-Age=-99999999;";
    },
  },
};
