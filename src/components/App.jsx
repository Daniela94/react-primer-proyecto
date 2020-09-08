import React from 'react';
import "../styles/styles.scss"
import Home from './Pages/Home'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import Header from './Organisms/Header'
import History from './Pages/History'
import Users from './Pages/Users'
import Premium from './Pages/Premium'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={Courses} />
      <Route path="/historial/:valor" component={History} />
      <Route path="/formulario" component={ () => 
        <Form name="Página de contacto" /> } 
      />
      <Route path="/usuarios" component={Users} />
      <Route path="/premium" component={Premium} />

      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada :(</span>
        </div>
        )
      }
      />
    </Switch>
  </Router>
)

export default App;
