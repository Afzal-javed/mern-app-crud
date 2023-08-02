import './App.css';
import NavBar from './Component/NavBar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route exact path='/all' element={<Read/>}/>
          <Route exact path='/:id' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
