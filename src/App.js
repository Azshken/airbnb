import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((item) => (
    <Card key={item.id} item={item} /* {...item} Spread syntax*/ />
  ));

  return (
    <div class="body-font font-poppins">
      <Navbar />
      <Hero />
      <div class="flex flex-wrap">{cardElements}</div>
    </div>
  );
}

export default App;
