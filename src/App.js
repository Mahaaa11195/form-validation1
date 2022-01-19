import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Test from './components/Test.js'

function App() {
     
       
  return (
      <Router>
          <div className="App">
      <Test />
      <div className="App-Link">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Route path="/home" render={(props)=>{
          return <div><Home userName="Maha" {...props} /></div>
        }}/>
        <Route path="/login" component={Login} />
      </div>
    </div>
     
 </Router>
  );
}

export default App;
