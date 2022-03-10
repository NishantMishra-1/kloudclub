import React, { useState } from "react";

const AuthContext = React.createContext();
const AuthProvider = (props) => {
  function setDeleteJob(job) {
    setJob(job);
  }
  const [job, setJob] = useState();
  const value = {
    job,
    setDeleteJob
  };
  return (
    <AuthContext.Provider value={value}>{props.childern}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
