import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES_BY_CONTINENTS = gql`
  query GetCountriesByContinent($continentCode: ID!) {
    continent(code: $continentCode) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query ($countryCode: ID!) {
    country(code: $countryCode) {
      name
      emoji
      currency
      capital
    }
  }
`;