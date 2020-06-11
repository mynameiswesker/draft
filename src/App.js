import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import Topmenu from './Components/Topmenu';
import Home from './Containers/Home';
import Heroes from './Components/Heroes';
import Info_Hero from './Components/Info_Hero';
import Combo from './Components/Combo';
import Items from './Components/Items';

alert('Выбирете на радиокнопке enemy и возьмите несколько персонажей, справа и снизу приложение подскажет о драфте и сборке');

function App() {
  return (
    <React.Fragment>
      <Topmenu/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/heroes/" component={Heroes} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/combo/" component={Combo} />
        <Route exact path="/info_hero/:slug" component={Info_Hero} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
