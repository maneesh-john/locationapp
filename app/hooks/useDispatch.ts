import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

export const useDispatch = () => {
  return useContext(AppContext)?.dispatch;
}