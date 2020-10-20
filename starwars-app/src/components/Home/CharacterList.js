import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import People from "./People";
import { ALL_CHARACTERS } from "../../data/data";
import { Details } from "./Details";

export const CharacterList = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  const [personDetails, setPersonaDetails] = useState(null);

  function handleCallback(Person) {
    setPersonaDetails(Person);
  }

  if (loading) return <p>LOADING .. :(</p>;
  if (error) return <p>Error :(</p>;

  function renderCharacteres() {
    return data.allPeople.people.map((character) => {
      return (
        <People
          key={character.id}
          name={character.name}
          characterId={character.id}
          clickCallback={handleCallback}
        />
      );
    });
  }
  return (
    <>
      {loading ? (
        <p>LOADING ...</p>
      ) : (
        <div className="flex">
          <div className="w-6/12">
            <li>{renderCharacteres()}</li>
          </div>
          <div className="w-6/12">
            {personDetails && <Details person={personDetails}></Details>}
          </div>
        </div>
      )}
    </>
  );
};
