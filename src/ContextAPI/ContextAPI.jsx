import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  const [jobs, setJobs] = useState([]);
  const [freelancers, setFreelancers] = useState({});
  const [freelancer, setFreelancer] = useState({});

  // Handel Login
  const login = (loginInfo) => {
    setLoading(true);

    fetch("https://work-station-server.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "fail") {
          setLoginError(data.message);
        }
        if (data?.status === "success") {
          localStorage.setItem("WorkStation_jwt", data?.token);

          fetch("https://work-station-server.vercel.app/api/v1/user/me", {
            headers: {
              authorization: `bearer ${localStorage.getItem(
                "WorkStation_jwt"
              )}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                setLoggedUser(data);
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Get Logged user
  useEffect(() => {
    fetch("https://work-station-server.vercel.app/api/v1/user/me", {
      headers: {
        authorization: `bearer ${localStorage.getItem("WorkStation_jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLoggedUser(data);
        }
      })
      .finally(() => {
        setUserLoading(false);
      });
  }, []);

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

  // get Freelancer
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
          setFreelancer(data?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const contextInfo = {
    loggedUser,
    setLoggedUser,
    login,
    loginError,
    loading,
    userLoading,
    jobs,
    freelancers,
    freelancer,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
