import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Display messageClass={"message"} textToShow={"Calling..."} />
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <Display messageClass={"number"} textToShow={"123423434"} />

          <a href="?" className="call">
            Call
          </a>

          <a href="?" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
