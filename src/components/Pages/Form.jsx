import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: "",
      correo: "",
      fecha: new Date()
    }

    this.setNombre = this.setNombre.bind(this)
    this.setCorreo = this.setCorreo.bind(this)
  }

  setNombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }

  setCorreo(e) {
    this.setState({
      correo: e.target.value
    })
  }

  actualizarFecha() {
    this.setState({
      fecha: new Date()
    })
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
        <form className="ed-container" id="form-element">
          <div className="ed-item lg-40 form__item">
            <label>Nombre completo</label>
            <input type="text" 
              onChange={this.setNombre} 
            />
          </div>
          <div className="ed-item lg-40 form__item">
            <label>Correo electrónico</label>
            <input type="email" 
              onChange={this.setCorreo}
            />
          </div>
          <div className="ed-item small">
            <input type="submit" className="button small" />
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.nombre}`}</h2>
          <p>{`Tu correo es ${this.state.correo}`}</p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let formElement = document.getElementById('form-element')
    // console.log(formElement)
    this.intervaloFecha = setInterval(() => {
      this.actualizarFecha()
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps)
    // console.log(prevState)
    // console.log('--------')
  }

  componentWillUnmount() {
    clearInterval(this.intervaloFecha)
  }

}

export default Form