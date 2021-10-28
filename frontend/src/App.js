import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, ToDoList, Contact, CompletedToDo } from "./components";
import { InfoButton } from "./components";


function App() {
  return (
    <div className="App">
       <Router>
        <Navigation />
        <Switch>
          <Route path="/todos" exact component={() => <ToDoList />} />
          <Route path="/completedtodos" exact component={() => <CompletedToDo />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/info" exact component={() => <InfoButton />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
