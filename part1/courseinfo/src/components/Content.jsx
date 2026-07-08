import Part from "./Part";

function Content(props) {
  return (
    <>
      {
        props.parts.map(part => {
          return <Part key={part.name} name={part.name} exercises={part.exercises} />
        })
      }
    </>
  );
}

export default Content;
