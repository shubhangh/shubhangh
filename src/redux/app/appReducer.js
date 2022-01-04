import { USER_DATA, GOT_USER_DATA } from "./constants";

const INITIAL_STATE = {
  userData: {},
  gotUserData: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log("shu action", action);
      return {
        ...state,
        userData: { ...action.payload },
      };

    case GOT_USER_DATA:
      return {
        ...state,
        gotUserData: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
