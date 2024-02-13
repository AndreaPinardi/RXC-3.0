import { useCallback } from "react";
import useConfigContent from "./useConfigContent";

export default function useAttributeTileList(attribute: string) {
  const contentOptions = useConfigContent(attribute);

  const onSelect = useCallback((id: string) => {
    console.log(id);
  }, []);

  return { options: contentOptions, onSelect };
}
