import { GET } from '../methods'
import apiEngine from "../apiEngine";

export default {
  list: () => {
    return apiEngine(GET, `/pack-list-types`)
  },
};

