export default {
  definingAttributes: {
    brand: "GL",
    channel: "Eyeglasses",
    model: "0RX5387",
  },
  layout: {
    left: {
      style: {
        width: "50%",
      },
      components: [
        {
          id: "RXC_YOUR_SELECTIONS",
          order: 1,
          position: "top-right",
        },
        {
          id: "RXC_FRAME_IMAGE",
          order: 2,
        },
      ],
    },
    right: {
      components: [
        {
          id: "RXC_HEAD_NAV",
          order: 1,
        },
        {
          id: "RXC_FOOTER",
          order: 2,
        },
      ],
      steps: [
        {
          definingAttributes: {
            number: "1",
            title: "Type",
            autoproceed: true,
          },
          components: [
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
          ],
        },
        {
          definingAttributes: {
            number: "1",
            title: "AdvancedPrescription",
            autoproceed: true,
          },
          components: [
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
          ],
        },
      ],
    },
  },
};
