import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const cityFilter = atom({
  default: null,
  key: uuidv4(),
})