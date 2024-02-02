import axios from "axios";
import glassesMock from "@/mock/flow/glasses";

const mockBackofficeUrl =
  "https://run.mocky.io/v3/d9ea2554-5ae7-4cbf-ae9f-d23aa1263b74";

export const getBackofficeConfig = async () => {
  // const response = await axios.get(mockBackofficeUrl);
  // return response.data;
  return glassesMock;
};
