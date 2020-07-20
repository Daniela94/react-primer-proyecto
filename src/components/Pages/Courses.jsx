import React, {Component} from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cursos: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/Daniela94/json-db/cursos')
    .then(response => this.setState({
      cursos: response.data
    }))
  }
  render() {
    const { cursos } = this.state
    return <CourseGrid courses={cursos}/>
  }

}
export default Courses