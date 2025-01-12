import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  companyDetail: {
    id: null,
    userId: null,
    name: "",
    legalName: "",
    stin: "",
    companyLogo: "",
    images: [],
    values: [],
    aboutValues: "",
    about: "",
    mission: "",
    vision: "",
    location: "",
    accountManagers: [],
    notifications: [],
    reviews: [],
    posts: [],
    followers: [],
  },
};

const companyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_COMPANY:
      console.log(action.payload);
      return {
        ...state,
        companyDetail: {...state.companyDetail, ...action.payload},
      };
    default:
      return state;
  }
};

export default companyReducer;
