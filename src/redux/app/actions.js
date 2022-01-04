import { USER_DATA, GOT_USER_DATA } from "./constants";

export const userDataAction = (payload) => {
  return {
    type: USER_DATA,
    payload: payload,
  };
};

export const gotUserDataAction = (gotUser) => {
  return {
    type: GOT_USER_DATA,
    payload: gotUser,
  };
};
