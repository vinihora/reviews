import "./App.css";
import Card from "./Card";
import { data } from "./data";

function App() {
  return (
    <div className="background">
      <h1 className="title">Our Reviews</h1>
      <div className="cards">
        <Card user={data} />
      </div>
    </div>
  );
}

export default App;
