import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_APP_USERS } from "../queries/appUserQueries";
import AppUserCpnt from "./AppUserCpnt";
import { appUserProps } from "../interfaces/AppUserInterfaces";

const AppUserListCpnt = () => {
  const { loading, data } = useQuery(GET_ALL_APP_USERS);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="app-user-list-wrapper">
          {data.appUsers.map((user: appUserProps) => (
            <AppUserCpnt name={user.name} email={user.email} key={user.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default AppUserListCpnt;
