function Total(props) {
  const parts = props.parts
  let sum = 0

  parts.forEach(value => {
    sum += value.exercises
  })

  return (
    <p>
      Number of exercises{" "}
      {sum}
    </p>
  );
}

export default Total;
