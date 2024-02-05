import { useEffect, useState } from "react";

export default function useComponentsLoader(_components) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const importComponent = async (componentId) => {
      const { default: Component } = await import(
        `@/pages/components/backoffice/${componentId}/${componentId}`
      );
      return Component;
    };

    const loadComponent = async (component) => {
      const Component = await importComponent(component.id);
      if (component.nested) {
        const nestedComponents = await Promise.all(
          component.nested.map(loadComponent)
        );
        return (
          <Component
            key={component.id}
            {...component}
            nestedComponents={nestedComponents}
          >
            {nestedComponents}
          </Component>
        );
      } else {
        return <Component key={component.id} {...component} />;
      }
    };

    const loadComponents = async () => {
      const loadedComponents = await Promise.all(
        _components.map(loadComponent)
      );
      setComponents(loadedComponents);
    };

    if (_components) loadComponents();
  }, [_components]);
  return components;
}
