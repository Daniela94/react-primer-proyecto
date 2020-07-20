import React from 'react'

const cursos = [
  {
    "id": 1,
    "titulo": "React desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/e19b1e7f-6dcc-495b-883c-7d0b9b3fdf15.jpg",
    "profesor": "Beto Quiroga",
    "precio": 50
  },
  {
    "id": 2,
    "titulo": "React desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 40
  },
  {
    "id": 3,
    "titulo": "HTML desde cero",
    "imagen": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 30
  },
  {
    "id": 4,
    "titulo": "Responsive web design",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/aae56a6c-bbb1-4c94-abe6-f4243278b32d.jpg",
    "imagenProfesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg",
    "profesor": "Álvaro Felipe",
    "precio": 20
  }
]

const Course = ({match}) => {
  const cursoActual = cursos.filter(curso => curso.id === parseInt(match.params.id))[0]
  return (
    <div className="ed-grid m-grid-3">

    { cursoActual ? (
      <>
          <h1 className="m-cols-3">{cursoActual.titulo}</h1>
          <img src={cursoActual.imagen} alt={cursoActual.titulo} className="m-cols-1" />
          <p className="m-cols-2">{`Profesor ${cursoActual.profesor}`}</p>
      </>
        )
        : ( <h1>El curso no existe</h1>
      ) 
    }
    </div>

  )
}

export default Course