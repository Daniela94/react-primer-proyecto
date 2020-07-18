import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./styles/styles.scss"
import Card from './Card'

const cursos = [
  {
    "titulo": "React desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/e19b1e7f-6dcc-495b-883c-7d0b9b3fdf15.jpg",
    "profesor": "Beto Quiroga",
    "precio": 50
  },
  {
    "titulo": "React desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 40
  },
  {
    "titulo": "HTML desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 30
  },
  {
    "titulo": "Responsive web design",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/aae56a6c-bbb1-4c94-abe6-f4243278b32d.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 20
  }
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://www.chevrolet.com.pa/content/dam/chevrolet/na/mx/es/index/cars/2019-aveo/aveo-shared-assets/2019-aveo-masthead-imwidth=1200.jpg" alt="banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Aveo 2018.1</p>
            <p> Gris Plata</p>
            <a href="https://www.chevrolet.com.pa/autos/aveo" className="button">Comprar</a>
          </div>
        </div>
      </div>
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
           />)
      }
    </div>
  </>
)

export default App;
