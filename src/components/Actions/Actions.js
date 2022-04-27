import Action from "../Action/Action";

const Actions = (action) => {
  return (
    <>
      <Action classToShow={"call active"} text={"Call"} />
      <Action classToShow={"hang active"} text={"Hang"} />
    </>
  );
};

export default Actions;
