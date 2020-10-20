import { useLazyQuery } from "@apollo/client";
import { GET_PERSON } from "../../data/data";
import React from "react";
import { Card } from "antd";

export default function People({ name, characterId, clickCallback }) {
  const [getCharacter] = useLazyQuery(GET_PERSON, {
    variables: { id: characterId },
    onCompleted({ person }) {
      clickCallback(person);
    },
  });
  return (
    <Card
      size="small"
      style={{ width: 300, cursor: "pointer" }}
      onClick={() => getCharacter()}
    >
      {name}
    </Card>
  );
}
