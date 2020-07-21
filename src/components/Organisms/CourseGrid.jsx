import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({courses}) => (
  <div className="ed-grid m-grid-4">
    { 
      courses.map(curso => (
        <CourseCard
          key={curso.id}
          id={curso.id}
          titulo={curso.titulo}
          imagen={curso.imagen}
          imagenProfesor={curso.imagenProfesor}
          profesor={curso.profesor}
          precio={curso.precio}
        /> 
      ))
    }
  </div>
)

export default withLoader("courses",CourseGrid)