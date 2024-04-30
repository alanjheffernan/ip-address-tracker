import { useContext, createContext, useState } from "react";
import { getIpAddressDetails } from "../service/IpService";

const IpContext = createContext();

export const useIpContext = () => {
  const context = useContext(IpContext);

  if (!context) {
    throw new Error("useIpContext must be used with Provider");
  }
  return context;
};

export const IpProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchIpAddress = async (searchAddress) => {
    setLoading(true);
    setError(null);
    try {
      console.log("hit");
      const data = await getIpAddressDetails(searchAddress);

      setData(data);
      setError(null);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
      console.log("erorr");
    }
  };

  return (
    <IpContext.Provider value={{ data, error, loading, fetchIpAddress }}>
      {children}
    </IpContext.Provider>
  );
};
