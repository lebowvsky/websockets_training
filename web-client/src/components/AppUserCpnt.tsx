import React from "react";
import { appUserProps } from "../interfaces/AppUserInterfaces";

const AppUserCpnt = ({ name, email }: appUserProps) => {
  return (
    <div className="app-user-wrapper">
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
    </div>
  );
};

export default AppUserCpnt;
