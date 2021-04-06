import './App.scss';
import { Route, Switch } from "react-router";
import HomePage from "./components/shared/HomePage";
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop/Shop';


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path ='/' component={HomePage}/>
       <Route path="*" component={NotFound}/>
       <Route exact path='/Shop' component={Shop}/>
     </Switch>
    </div>
  );
}

export default App;
