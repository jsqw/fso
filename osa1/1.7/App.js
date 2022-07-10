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
      <Stats title={"all"} value={bad + good + neutral} />
      <Stats
        title={"average"}
        value={((-1 * bad + 1 * good) / (good + bad + neutral)).toFixed(2)}
      />
      <Stats
        title={"positive"}
        value={((good / (good + bad + neutral)) * 100).toFixed(2)}
      />
    </div>
  );
};

const Stats = (props) => {
  if (props.title === "positive")
    return (
      <div>
        {props.title}: {props.value} %
      </div>
    );

  return (
    <div>
      {props.title}: {props.value}
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

export default App;
