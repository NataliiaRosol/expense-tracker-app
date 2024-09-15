import { createContext } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({chilren}){

  return <GlobalContext.Provider value={''}>{chilren}</GlobalContext.Provider>
}