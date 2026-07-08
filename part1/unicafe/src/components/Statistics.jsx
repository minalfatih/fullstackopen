import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  // console.log(props.all);

  return (
    <>
      <h1>statistics</h1>
      {props.all != 0 ? (
        <>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistics;
