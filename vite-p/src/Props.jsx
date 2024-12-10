import Props2 from "./Props2";

const Props = (props) => {
  return (
    <>
      <h1> hey this is {props.name}</h1>
      <Props2 fname = {props.name}/>
    </>
  );
};
export default Props;
