import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(null);

    localStorage.removeItem("user");

    navigate("/login");
  }, [setCurrentUser, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;

// import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/userContext";

// const Logout = () => {
//   const { setCurrentUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   setCurrentUser(null);
//   navigate("/login");
//   return <></>;
// };

// export default Logout;
