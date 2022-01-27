function Food({name}){
  console.log(name);
  return (
      <h3>I love {name}</h3>
  )
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name="Borsh" />
      <Food name="Palow" />
    </div> 
  );
}

export default App;
