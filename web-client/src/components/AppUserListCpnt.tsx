import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import AppUserCpnt from "./AppUserCpnt";
import {
  appUserProps,
  subscribeToNewAppUserInterface,
} from "../interfaces/AppUserInterfaces";
import { GET_ALL_APP_USERS, SUBSCRIBE_TO_NEW_APPUSER } from "../queries/appUserQueries";

const AppUserListCpnt = () => {
  const { loading, data, subscribeToMore } = useQuery(GET_ALL_APP_USERS);

  const [isSubscribedToNewAppUser, setIsSubscribedToNewAppUser] = useState(false);

  useEffect(() => {
    if(!isSubscribedToNewAppUser) {
      subscribeToMore<subscribeToNewAppUserInterface>({
        document: SUBSCRIBE_TO_NEW_APPUSER,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newAppUser } = subscriptionData.data;
          return {
            appUsers: [...prev.appUsers, newAppUser],
          };
        },
      });
    }
    setIsSubscribedToNewAppUser(true);
  }, [data]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="app-user-list-wrapper">
          {data?.appUsers.map((user: appUserProps) => (
            <AppUserCpnt name={user.name} email={user.email} key={user.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default AppUserListCpnt;
