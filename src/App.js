import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'

// import { Home, Category, About, Size, Navbar, NotFound } from './pages/index'

const Home = lazy(() => import("./pages/Home"))
const Category = lazy(() => import("./pages/Category"))
const About = lazy(() => import("./pages/About"))
const Size = lazy(() => import("./pages/Size"))
const NotFound = lazy(() => import("./pages/notfound/NotFound"))

const App = () => {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/category/:id' component={Category} />
            <Route path='/about' component={About} />
            <Route path='/size' component={Size} />
            <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App