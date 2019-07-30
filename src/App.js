import React from 'react';
import './App.css';
import {Form} from 'react-bootstrap';

class App extends React.Component {

  emailClick() {
    let em = document.getElementById('email');
    if (em.value == 'Email') { em.value = ''; }
  }

  nameClick() {
    let nm = document.getElementById('name');
    if (nm.value == 'Name') { nm.value=''; }
  }

  studentClick() {
    let sd = document.getElementById('studentid');
    if (sd.value == 'Name') { sd.value=''; }
  }

  render() {
  return (
    <div className="App-component">
      <div className="overlay">
        <h1>Dottorandi</h1>
        <p>Learn your way.</p>
        <h3 className="dontDisplay">
          Giulio Veglio and Ethan Moody are proud to inroduce the beta version
          of <i>Dottorandi</i>: a joint venture to encourage education and
          empower educators through easily accessible learning materials.
        </h3>
        <h4>Apply for the beta below</h4>
	<form action="mailto:moody@greycart.gg?subject=Dottorandi Beta" method="post" encType="text/plain">
	  <input defaultValue="Name" id="name" name="name" onClick={() => this.nameClick()} type="text"></input>
          <input defaultValue="Email" id="email" name="mail" onClick={() => this.emailClick()} type="text"></input>
          <input defaultValue="Student ID" id="studentid" name="studentid" onClick={() => this.studentClick()}></input>
	  <input type="submit"></input>
	</form>
      </div>
    </div>
  );
  }
}

export default App;
