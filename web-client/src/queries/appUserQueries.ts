import { gql } from '@apollo/client';

export const GET_ALL_APP_USERS = gql`
  query getAllAppUsers {
    appUsers {
      id
      name
      email
      password
    }
  }
`;