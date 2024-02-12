const fs = require("fs");
const { merge } = require("lodash");

// Specify the path to your JSON file
const filePath = "./components_schema.json";
const filePath2 = "./components_schema_defaults.json";

function readJSONFile(filename) {
  try {
    const rawData = fs.readFileSync(filename);
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error);
    return null;
  }
}

function formatType(tsType) {
  if (
    tsType?.name === "Array" &&
    tsType?.elements &&
    tsType?.elements.length > 0
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
    return { type: tsType?.name };
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
            default: prop?.defaultValue?.value || null,
            ...formatType(prop.tsType),
          };
        });
      }

      formatted[component.displayName] = newComponent;
    }
  });

  return formatted;
}

const schema = readJSONFile(filePath);
const schema_defaults = readJSONFile(filePath2);

function mergeFiles(file1, file2) {
  return merge(file1, file2);
}

if (schema && schema_defaults) {
  const formattedJson = formatJson(schema);
  const mergedFiles = mergeFiles(schema_defaults, formattedJson);
  const modifiedJson = JSON.stringify(mergedFiles, null, 2);
  fs.writeFile(filePath, modifiedJson, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("File modified successfully!");
    }
  });
}
