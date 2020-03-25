import React from "react";

export default function CharacterCard({ character, clickAction }) {
  const handleClick = () => {
    clickAction(character);
  };

  return (
    <li className="card" onClick={handleClick}>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
    </li>
  );
}
// import React from "react";

// export default function CharacterCard({
//   character,
//   addToFavorites,
//   removeFromFavorites
// }) {
//   const handleClick = () => {
//     if (addToFavorites) {
//       addToFavorites(character);
//     } else {
//       removeFromFavorites(character);
//     }
//   };

//   return (
//     <li className="card" onClick={handleClick}>
//       <h3>{character.name}</h3>
//       <img src={character.image} alt="" />
//     </li>
//   );
// }
