import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [freelancers, setFreelancers] = useState({});
  const [loggedFreelancer, setLoggedFreelancer] = useState({});
  const [loggedClient, setLoggedClient] = useState({});

  // Get All Jobs
  useEffect(() => {
    fetch("https://work-station-server.vercel.app/api/v1/job/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setJobs(data?.data);
        }
      });
  }, []);

  // get all Freelancers
  useEffect(() => {
    fetch(
      "https://work-station-server.vercel.app/api/v1/freelancer/all-freelancers"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setFreelancers(data?.data);
        }
      });
  }, []);

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
    loggedUser,
    setLoggedUser,
    loading,
    jobs,
    freelancers,
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
