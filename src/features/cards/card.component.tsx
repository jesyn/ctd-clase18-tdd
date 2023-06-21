import { FC } from "react";
import { Character } from "../../types/character.types";

export type CardProps = {
  character: Character;
};

const Card: FC<CardProps> = ({ character }: CardProps) => {
  return (
    <div>
      <h2>{character.name}</h2>
      {character.image && <img src={character.image} alt={character.name} />}
      {character.followers ? (
        <p>{character.followers} followers</p>
      ) : (
        "No followers yet"
      )}
    </div>
  );
};

export default Card;
