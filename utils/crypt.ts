import md5 = require("md5");

export const genPassword = (password: string): string => {
  let passwordToSave = md5(password);
  return passwordToSave;
};
