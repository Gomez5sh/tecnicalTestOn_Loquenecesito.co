/*import { Layout, Spin, Alert } from "antd";
import { useLazyQuery, gql } from "@apollo/client";
import React from "react";

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

export function Details() {
  const { data, loading, error } = useLazyQuery(GET_PERSON);

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  if (error) return <Alert message="Error" type="error" showIcon />;
  
  const characters = data.id.person;
  
  return (
    <>
      <Layout>
        <div className="px-4">
          <h2 className="font-bold">{characters.map(character => {

          })}</h2>
        </div>
      </Layout>
    </>
  );
}
*/
