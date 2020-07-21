import React, { Component } from 'react'
import UsersGrid from '../Pages/UsersGrid'
import axios from 'axios'

class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users', {
  //     method: 'get'
  //   }).then(response => response.json())
  //     .then(response2 => { 
  //       this.setState({
  //         users: response2
  //       })
  //     })
  // }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users') // promesa
    .then(response => {
      this.setState({
        users: response.data
      })
    }) // lo que hace cuando se cumple la promesa
  }

  render() {
    const {users} = this.state
    return <UsersGrid users={users} />
  }
}

export default Users