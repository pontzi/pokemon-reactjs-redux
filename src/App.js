import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Badges from './pages/Badges'
import BadgesNew from './pages/BadgesNew'
import BadgeEdit from './pages/BadgeEdit'



const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path ="/badges" component={Badges} />
          <Route exact path ="/badges/new" component={BadgesNew} />
          <Route exact path ="/badges/:pokemonName/edit" component={BadgeEdit} />
          <Route component={() => (<h1>Error 404 Not Found :(</h1>)} />
        </Switch>
      </Layout>
  
    </HashRouter>
  )
}

export default App;
