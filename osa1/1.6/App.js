import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics: </h2>
      <Stats title={"good"} value={good} />
      <Stats title={"neutral"} value={neutral} />
      <Stats title={"bad"} value={bad} />
    </div>
  );
};

const Stats = (props) => (
  <div>
    {props.title}: {props.value}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

export default App;
