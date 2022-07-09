const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part part={content.parts[0]} />
      <Part part={content.parts[1]} />
      <Part part={content.parts[2]} />
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
      {total.parts[0].exercises +
        total.parts[1].exercises +
        total.parts[2].exercises}
    </p>
  );
};

const Header = (header) => {
  console.log(header);
  return <h1>{header.course.name}</h1>;
};

export default App;
