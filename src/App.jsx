import './App.css';
import DessertsList from './DessertsList';
const desserts = [
  { id: "1", name: "Cheese Cake", calories: "250" },
  { id: "16", name: "Choc Cake", calories: "450" },
  { id: "15", name: "Honey Cake", calories: "250" },
  { id: "12", name: "Cinabbon", calories: "350" },
  { id: "13", name:"Fruits Jelly", calories:"400" }
]
function App() {
  return (
    <div>
      <h1>Low Cals Desserts</h1>
    <DessertsList data={desserts} />
    </div>
    
  );
}

export default App;
