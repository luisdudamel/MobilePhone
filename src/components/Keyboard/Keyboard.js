import Key from "../Key/Key";
import keysList from "../../keysList";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keysList.map((key, index) => (
          <Key
            key={index}
            text={key}
            action={() => {}}
            keyClass={typeof key === "number" ? "key" : "key big"}
          />
        ))}
      </ol>
    </div>
  );
};
export default Keyboard;
