import Hello from "./Hello";
import Home from "./componets/Home";

function App() {
  return (
    <>
      <div>
        <Hello emoji="(⓿_⓿)" />
        <Hello emoji="😘" />
        <Hello emoji="(❤️ ω ❤️)" />
        <Hello emoji="☆*: .｡. o(≧▽≦)o .｡.:*☆" />
      </div>
      <Home />
      <h1>My React</h1>
    </>
  );
}

export default App;
