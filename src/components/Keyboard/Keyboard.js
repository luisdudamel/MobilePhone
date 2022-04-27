import Key from "../Key/Key";
import keysList from "../../keysList";

const Keyboard = () => {
  return (
    <div class="keyboard-container">
      <ol class="keyboard">
        {keysList.map((key) => (
          <Key
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
