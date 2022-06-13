import { AppState, Action } from "../types/context";
import { SET_LOCATION } from "./types";

export const initState: AppState = {
  currentLocation: {
    id: "",
    name: "",
    time: ""
  },
  locationHistory: []
};

export function reducer(state = initState, action: Action): AppState {
  console.log("action", action)
  switch(action.type){
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}