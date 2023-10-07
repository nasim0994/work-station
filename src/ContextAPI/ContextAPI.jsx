import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [loggedFreelancer, setLoggedFreelancer] = useState({});
  const [loggedClient, setLoggedClient] = useState({});

  // get Logged Freelancer
  useEffect(() => {
    setLoading(true);
    fetch("https://work-station-server.vercel.app/api/v1/freelancer/me", {
      headers: {
        authorization: `bearer ${localStorage.getItem("WorkStation_jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLoggedFreelancer(data?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // get Logged client
  useEffect(() => {
    setLoading(true);
    fetch("https://work-station-server.vercel.app/api/v1/client/me", {
      headers: {
        authorization: `bearer ${localStorage.getItem("WorkStation_jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLoggedClient(data?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const contextInfo = {
    loading,
    loggedFreelancer,
    loggedClient,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
