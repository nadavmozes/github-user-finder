import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './cmps/Navbar'
import Home from './cmps/Home'
import Alert from './cmps/Alert'
import UserDetails from './cmps/UserDetails'
import About from './pages/About'
import NotFound from './cmps/NotFound'
import './App.css'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState.jsx'




const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route path="/user/:login" component={UserDetails} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
