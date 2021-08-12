import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const ContextVariable = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://www.omdbapi.com/?s=Batman&apikey=7089fccf"
        );

        console.log(response);
        if (response.status === 200) {
          setData(response.data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ContextVariable.Provider value={{ data }}>
      {children}
    </ContextVariable.Provider>
  );
}

export function useProvider() {
  return useContext(ContextVariable);
}
