import Input from "components/input";

function App() {
  const hihi = () => {};
  return (
    <div className="App">
      <header className="App-header">Booke Admin</header>
      <Input
        type="text"
        name="12"
        defaultValue="123"
        placeholder="user"
        onChange={hihi}
      />
    </div>
  );
}

export default App;
