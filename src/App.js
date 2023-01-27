import Home from "./component/Home";
import DisplayBook from "./component/DisplayBook";
import Header from "./component/Header";
import { Route,Routes,Link} from "react-router-dom";


function App () {

  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> | {" "}
        <Link to="/display" >Display</Link>{" "} | {" "}
        <Link to="/header" >Header</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/display" element={<DisplayBook/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
    </div>
  )
}

export default App;
