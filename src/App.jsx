import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import LandingPage from './LandingPage/landingPage';


function App() {
  return (
    <div className="App">
    <switch>
    
     <Route exact  path="/" component={LandingPage} />
     
     </switch>
      
    
    </div>
  );
}


export default App;
