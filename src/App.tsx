import Button from "components/button";

function App() {
  const sumb = () => {
    console.log("hihi");
  };
  return (
    <div className="App">
      <header className="App-header">Booke Admin</header>
      <Button onClick={sumb}>add</Button>
    </div>
  );
}

export default App;
