import { useContext, createContext, useEffect, useState } from "react";

const ContextVariable = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("Superman")
  const [page, setPage] = useState(1)
  return (
    <ContextVariable.Provider value={{ data, setData, currentSearch, setCurrentSearch,page,setPage }}>
      {children}
    </ContextVariable.Provider>
  );
}

export function useProvider() {
  return useContext(ContextVariable);
}
