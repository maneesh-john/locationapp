import { Dispatch } from "react";
import { SET_LOCATION } from "../contexts/types";

export type Location = {
  id: string;
  name: string;
  time: string;
}

export type AppState = {
  currentLocation: Location;
  locationHistory: Location[];
}

export type Action = {
  type: typeof SET_LOCATION;
  payload: AppState;
}

export type Context = {
  state: AppState;
  dispatch: Dispatch<Action>;
}