import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Category, About, Size, Navbar } from './pages/index'

const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/category' component={Category} />
            <Route path='/about' component={About} />
            <Route path='/size' component={Size} />
        </Switch>
      </Router>
    </>
  )
}

export default App