import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import pagenews from './pages/pagenews'
import pageadd from './pages/addnews'
import editnews from './pages/editnews'
import updatenews from './pages/updatenews'
import deletenews from './pages/deletenews'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={pagenews} />
        <Route path="/add" component={pageadd} />
        <Route path="/edit" component={editnews} />
        <Route path="/update/:id" component={updatenews} />
        <Route path="/delete/:id" component={deletenews} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes