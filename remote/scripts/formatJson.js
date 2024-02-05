const fs = require("fs");

// Specify the path to your JSON file
const filePath = "./components.json";

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Modify the JSON data as needed

  function formatType(tsType) {
    if (
      tsType.name === "Array" &&
      tsType.elements &&
      tsType.elements.length > 0
    ) {
      const elementType = tsType.elements[0];
      if (elementType.name === "signature") {
        return {
          type: "Array",
          elements: {
            type: elementType.type,
            properties: elementType.signature.properties.map((prop) => ({
              key: prop.key,
              value: {
                type: prop.value.name,
                required: prop.value.required,
              },
            })),
          },
        };
      } else {
        return { type: "Array", elements: elementType.name };
      }
    } else {
      return { type: tsType.name };
    }
  }

  function formatJson(json) {
    const formatted = {};

    Object.keys(json).forEach((key) => {
      const componentArray = json[key];
      if (componentArray.length > 0) {
        const component = componentArray[0];
        const newComponent = {
          displayName: component.displayName,
          props: {},
        };

        if (component.props) {
          Object.keys(component.props).forEach((propName) => {
            const prop = component.props[propName];
            newComponent.props[propName] = {
              required: prop.required,
              ...formatType(prop.tsType),
            };
          });
        }

        formatted[component.displayName] = newComponent;
      }
    });

    return formatted;
  }

  const formattedJson = formatJson(jsonData);

  // Convert the modified data back to JSON
  const modifiedJson = JSON.stringify(formattedJson, null, 2); // The third parameter (2) specifies the indentation level for formatting.

  // Write the modified JSON back to the file
  fs.writeFile(filePath, modifiedJson, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("File modified successfully!");
    }
  });
});
