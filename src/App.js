import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number">667359961</span>

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
