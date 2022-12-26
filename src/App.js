import "./css/style.css"
import {data} from "./places-data.js"
import List from "./components/List" 
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <List data={data}/>
    </div>
  );
}
