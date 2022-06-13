import React, { createContext, useReducer } from "react";

import { initState, reducer } from "./appReducer";
import { Context } from "../types/context";

const initContext = {
  state: initState,
  dispatch: () => initState
}

export const AppContext = createContext<Context | null>(initContext);

export const AppProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initState);

  return(
    <AppContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
}