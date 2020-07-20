import React from 'react';
import "./styles/styles.scss"
import Banner from './Banner'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid'
import Course from './Course'
import MainMenu from './MainMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const cursos = [
  {
    "titulo": "React desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/e19b1e7f-6dcc-495b-883c-7d0b9b3fdf15.jpg",
    "profesor": "Beto Quiroga",
    "precio": 50
  },
  {
    "titulo": "Go desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg",
    "profesor": "Alexys Lozada",
    "precio": 30
  },
  {
    "titulo": "CSS desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 20
  },
  {
    "titulo": "HTML desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/312172bf-ddba-409b-9aa3-6bf4c758805e.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 15
  }
]

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/formulario" component={ () => 
        <Formulario name="Página de contacto" /> } 
      />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada :(</span>
        </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map( curso => 
          <Card 
            titulo={curso.titulo}
            imagen={curso.imagen}
            imagenProfesor={curso.imagenProfesor}
            profesor={curso.profesor}
            precio={curso.precio}
          /> )
      }
    </div>
  </>
)

export default App;
