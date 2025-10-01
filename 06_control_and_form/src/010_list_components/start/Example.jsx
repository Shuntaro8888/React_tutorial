const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  
  const animalList = [];
  for(const animal of animals) {
    animalList.push(<li>{animal}</li>)
  } //文

  const helloAnimals = animals.map((animal) =>
  <li>Hello, {animal}</li>); //式 JSXに書ける

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animals.map((animal) => <li>Hello, {animal}</li>)}
        {animalList}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
