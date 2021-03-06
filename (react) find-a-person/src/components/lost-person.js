import './../App.css';
import React from 'react';
import {createLostPerson} from '../services/LostPersonService'

export default class LostPerson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curp : "",
      first_name : "",
      last_name : "",
      birth_date : "",
      last_seen : "",
      missing : true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit(event) {
    createLostPerson(this.state.value);
    alert('Los datos han sido registrados correctamente');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Ingresa los datos de la persona a buscar</h3>
          <label>
            CURP
            <input type="text" name="curp" value={this.state.curp} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Nombre(s)
            <input type="text" name="name" value={this.state.first_name} onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
            Apellido(s)
            <input type="text" name="surname" value={this.state.last_name} onChange={this.handleInputChange}/>
          </label>
          <br />

          <label>
            Fecha de Nacimiento
            <input type="date" name="birthDate" value={this.state.birth_date} onChange={this.handleInputChange}/>
          </label>
          <br />

          <label>
            Última vez visto
            <input type="date" name="lastSeen" value={this.state.last_seen} onChange={this.handleInputChange}/>
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div >
    );
  }
}
