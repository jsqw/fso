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
      <Statistics props={[good, neutral, bad]} />
    </div>
  );
};

const Statistics = (props) => {
  const good = props.props[0];
  const neutral = props.props[1];
  const bad = props.props[2];
  const all = good + bad + neutral;
  const average = (-1 * bad + 1 * good) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Stats title={"good"} value={good} />
      <Stats title={"neutral"} value={neutral} />
      <Stats title={"bad"} value={bad} />
      <Stats title={"all"} value={all} />
      <Stats title={"average"} value={average.toFixed(2)} />
      <Stats title={"positive"} value={positive.toFixed(2)} />
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
