const StatisticLine = (props) => {
  // console.log(props);

  return (
    <p>
      {props.text === "positive"
        ? `${props.text} ${props.value} %`
        : `${props.text} ${props.value}`}
    </p>
  );
};

export default StatisticLine;
