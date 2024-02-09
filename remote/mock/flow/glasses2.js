export default {
  definingAttributes: {
    channel: "glasses",
    category: "Eyeglasses",
    isSupernova: false,
    layout: {
      id: "vertical_50-50",
      type: "vertical",
      sizes: {
        previewSection: "50%",
        stepSection: "50%",
      },
      previewImage: "https://dn.test.com/image.png",
    },
  },
  previewSection: {
    components: [
      {
        id: "RXC_BRAND_LOGO",
        order: 0,
        position: "top-left",
      },
      {
        id: "RXC_YOUR_SELECTIONS",
        order: 1,
        position: "top-right",
      },
      {
        id: "RXC_FRAME_IMAGE",
        order: 2,
      },
      {
        id: "RXC_BRAND_FOOTER",
        order: 3,
        position: "bottom-left",
      },
    ],
  },
  stepSection: {
    steps: [
      {
        definingAttributes: {
          number: "1",
          title: "Type",
          autoproceed: true,
          autoproceedLabel: "Continue",
          autoSkip: true,
          hasGreyout: false,
          analytics_ID: "VISION",
        },
        components: [
          {
            id: "RXC_HEAD_NAV",
            order: 0,
            insuranceButtonLabel: "Add insurance benefits",
            applyingInsurance: "Applying insurance benefits",
            insuranceLabelRemove: "Remove insurance benefits",
            price_totalFrameLens_frame: "Frame price",
            price_totalFrameLens_frameLensTotal: "Frame + lenses price",
          },
          {
            id: "RXC_TITLE_DESCRIPTION",
            order: 1,
            title: "Choose your vision need",
            description:
              "Choose between prescription lenses, non-prescription lenses or no lenses depending on your needs.",
          },
          {
            id: "RXC_ATTRIBUTE_TILE_LIST",
            order: 2,
            attribute: "type",
          },
          {
            id: "RXC_FOOTER",
            order: 3,
            insuranceButtonLabel: "Add insurance benefits",
            applyingInsurance: "Applying insurance benefits",
            insuranceLabelRemove: "Remove insurance benefits",
            price_totalFrameLens_frame: "Frame price",
            price_totalFrameLens_frameLensTotal: "Frame + lenses price",
          },
        ],
      },
      {
        definingAttributes: {
          number: "2",
          title: "AdvancedPrescription",
          autoproceed: true,
          autoSkip: true,
          hasGreyout: false,
          analytics_ID: "PRESCRIPTION_TYPE",
        },
        components: [
          {
            id: "RXC_HEAD_NAV",
            order: 0,
            insuranceButtonLabel: "Add insurance benefits",
            applyingInsurance: "Applying insurance benefits",
            insuranceLabelRemove: "Remove insurance benefits",
            price_totalFrameLens_frame: "Frame price",
            price_totalFrameLens_frameLensTotal: "Frame + lenses price",
          },
          {
            id: "RXC_TITLE_DESCRIPTION",
            order: 1,
            title: "Choose your vision need",
            description:
              "Choose between prescription lenses, non-prescription lenses or no lenses depending on your needs.",
          },
          {
            id: "RXC_MANUAL_LIST",
            order: 2,
            title: "Enter your prescription",
            description:
              "Don't have a current prescription? Find Eye Doctors Near You",
            values: [
              {
                title: "Fill it in online",
                description: "Enter your prescription manually",
                component: "RXC_PRESCRIPTION_PANEL",
                view: "replace",
              },
              {
                title: "Use saved prescription",
                description:
                  "Log in and select saved prescription from My Account",
                component: null,
                view: "popup",
              },
            ],
          },
          {
            id: "RXC_FOOTER",
            order: 3,
            insuranceButtonLabel: "Add insurance benefits",
            applyingInsurance: "Applying insurance benefits",
            insuranceLabelRemove: "Remove insurance benefits",
            price_totalFrameLens_frame: "Frame price",
            price_totalFrameLens_frameLensTotal: "Frame + lenses price",
          },
        ],
      },
      {
        definingAttributes: {
          number: "3",
          title: "LensColor",
          autoproceed: false,
          autoproceedLabel: "Apply",
          autoSkip: true,
          hasGreyout: false,
          analytics_ID: "LensColor",
        },
        components: [
          {
            id: "RXC_HEAD_NAV",
            order: 0,
            insuranceButtonLabel: "Add insurance benefits",
            applyingInsurance: "Applying insurance benefits",
            insuranceLabelRemove: "Remove insurance benefits",
            price_totalFrameLens_frame: "Frame price",
            price_totalFrameLens_frameLensTotal: "Frame + lenses price",
          },
          {
            id: "RXC_TITLE_DESCRIPTION",
            order: 1,
            title: "Choose your vision need",
            description:
              "Choose between prescription lenses, non-prescription lenses or no lenses depending on your needs.",
          },
        ],
      },
    ],
  },
};

const layoutTypes = [
  {
    id: "vertical_50-50",
    type: "vertical",
    sizes: {
      previewSection: "50%",
      stepSection: "50%",
    },
    previewImage: "https://dn.test.com/image.png",
  },
  {
    id: "vertical_40-60",
    type: "vertical",
    sizes: {
      previewSection: "40%",
      stepSection: "60%",
    },
    previewImage: "https://dn.test.com/image.png",
  },
  {
    id: "vertical_0-100",
    type: "vertical",
    sizes: {
      previewSection: "0%",
      stepSection: "100%",
    },
    previewImage: "https://dn.test.com/image.png",
  },
  {
    id: "horizontal_50-50",
    type: "horizontal",
    sizes: {
      previewSection: "50%",
      stepSection: "50%",
    },
    previewImage: "https://dn.test.com/image.png",
  },
];
