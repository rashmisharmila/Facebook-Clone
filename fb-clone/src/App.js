
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
      <Route exact path="/HeaderArea" element={<HeaderArea/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
