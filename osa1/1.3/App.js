const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header header={course} />
      <Content content={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part part={content.content[0]} />
      <Part part={content.content[1]} />
      <Part part={content.content[2]} />
    </div>
  );
};

const Part = (part) => {
  return (
    <p>
      {part.part.name}: {part.part.exercises}
    </p>
  );
};

const Total = (total) => {
  return (
    <p>
      Number of exercises{": "}
      {total.total}
    </p>
  );
};

const Header = (header) => {
  console.log(header);
  return <h1>{header.header}</h1>;
};

export default App;
