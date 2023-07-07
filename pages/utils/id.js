import { customAlphabet } from "nanoid";

export const nanoid = (size = 12) => {
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid12 = customAlphabet(alphabet, size);
  return nanoid12();
};
