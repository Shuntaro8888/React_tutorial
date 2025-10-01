import Profile from "./components/Profile";

const Example = () => {
  const personObjs = [
    { name: "Geo", age: 18, hobbies: ["sports", "music"] },
    { name: "Tom", age: 25, hobbies: ["movie", "music"] },
    { name: "Lisa", age: 21, hobbies: ["sports", "travel", "game"] },
  ];

  return (
    <>
      <ul>
        {personObjs.map((personObj) => (
          <li key={personObj.name}>
            <Profile {...personObj} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
