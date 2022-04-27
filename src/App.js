import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info classToShow={"message"} text={"Calling...."} />
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <Display messageClass={"number"} textToShow={"123423434"} />
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
