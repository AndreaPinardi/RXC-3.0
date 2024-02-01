import axios from "axios";

const mockBackofficeUrl =
  "https://run.mocky.io/v3/c2a5a1f2-432b-40d9-9fda-504ba2911012";

export const getBackofficeConfig = async () => {
  const response = await axios.get(mockBackofficeUrl);
  return response.data;
};
