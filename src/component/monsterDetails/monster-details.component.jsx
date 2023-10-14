import React from "react";

const MonsterDetails = ({ monster }) => {
  // Render the monster details here
  return (
    <div>
      <h2>{monster.id}</h2>
      <h2>{monster.name}</h2>
      <h3>{monster.username}</h3>
      <h3>{monster.email}</h3>
      <h3>{monster.website}</h3>
    </div>
  );
};

export default MonsterDetails;
