import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../../data/data";
import { Spin, Alert } from "antd";
import { People } from "./People";

export const CharacterList = () => {
  // GPL
  const { data, loading, error } = useQuery(ALL_CHARACTERS);

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  if (error) return <Alert message="Error" type="error" showIcon />;

  const render = () => {
    return data.allPeople.people.map((character) => {
      return (
        <People
          key={character.id}
          name={character.name}
          year={character.birthYear}
          gender={character.gender}
          home={character.homeworld.name}
          film={character.filmConnection.films.title}
          direc={character.filmConnection.films.director}
          prod={character.filmConnection.films.producers}
          opText={character.filmConnection.films.openingCrawl}
          relace={character.filmConnection.films.releaseDate}
        />
      );
    });
  };

  return <>{render()}</>;
};
