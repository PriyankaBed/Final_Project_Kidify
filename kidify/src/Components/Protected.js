import React from "react";
import { Navigate, Outlet } from "react-router";

function Protected({user}) {
 console.log(user)
  return (
    <div>
      {user ? <Outlet /> : <Navigate to="/"/>}
    </div>
  );
}

export default Protected;
