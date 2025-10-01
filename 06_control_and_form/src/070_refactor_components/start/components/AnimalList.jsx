import AnimalItem from "./AnimalItem";

const AnimalList = ({ Animals }) => {
  if (Animals.length === 0) {
    return <h3>アニマルが見つかりません。</h3>;
  }
  return (
    <ul>
      {Animals.map((animal) => {
        return <AnimalItem animal={animal} key={animal}/>;
      })}
    </ul>
  );
};

export default AnimalList;
