import "./App.css";
import Header from "./Header";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
      </Routes>
      <Header></Header>
    </div>
  );
}

export default App;
