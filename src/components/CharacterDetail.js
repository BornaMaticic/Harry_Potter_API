import React, {Fragment} from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <Fragment>
    <h3>Name: {props.character.name}</h3>
    <p>House: {props.character.house}</p>
    <p>Actor: {props.character.actor}</p>
    <img className="image" src={props.character.image} />

    </Fragment>
  );
}
export default CharacterDetail;
