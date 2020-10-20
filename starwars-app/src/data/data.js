import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;

export const GET_PERSON = gql`
  query($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      homeworld {
        name
      }
      hairColor
      height
      filmConnection {
        films {
          title
          director
          producers
          openingCrawl
          releaseDate
        }
      }
    }
  }
`;
