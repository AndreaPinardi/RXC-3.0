import { useMemo } from "react";
import { useSelector } from "react-redux";

type ConfigEntry = { [key: string]: string | number; sequence: number };

type Entry = ConfigEntry & { id: string };

export default function useConfigContent(attribute: string): Entry[] {
  const configContent = useSelector((state: any) => state.config?.content);

  const content = useMemo(() => {
    if (!configContent) return [];
    const key = Object.keys(configContent).find(
      (el) => el.toLowerCase() === attribute.toLowerCase()
    );
    if (key) {
      const entries: ConfigEntry[] = configContent[key];
      if (entries) {
        return Object.entries(entries)
          .map(([key, val]) => ({ id: key, ...val }))
          .sort((a, b) => a.sequence - b.sequence);
      }
    }
    return [];
  }, [configContent, attribute]);
  return content;
}
