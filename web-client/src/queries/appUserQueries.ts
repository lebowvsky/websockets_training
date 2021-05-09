import { gql } from '@apollo/client';

export const GET_ALL_APP_USERS = gql`
  query getAllAppUsers {
    appUsers {
      id
      name
      email
    }
  }
`;

export const SUBSCRIBE_TO_NEW_APPUSER = gql`
  subscription subscribeToNewAppUser {
    newAppUser {
      id
      name
      email
    }
  }
`;