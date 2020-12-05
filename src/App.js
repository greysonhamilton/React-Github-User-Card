import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component() {
  constructor() {
    super();

    this.state = {

      user: {},
      username: ''

    }

  }

  fetchUser = () => {

    alert(`Fetching ${this.state.username} user.`);

    axios.get(`https://api.github.com/users/${this.state.username}`)

    .then((res) => {
        this.setState({
            ...this.state,
            user: res.data.value
        });
    })

    .catch((err) => {
        console.log(err);
    })

  }

  handleChange = (e) => {
    this.setState({
      ...this.state, 
      username: e.target.login
    })
  }

  componentDidMount() {

    axios.get('https://dog.ceo/api/breed/hound/images')

    .then((res) => {
        console.log(res);
        this.setState({
            ...this.state,
            user: res.data.value
        });

    })

    .catch((err) => {
        console.log(err);
    })

}

  render() {

    return (

      <div className="App">
        <div>
          <h1>Greetings GitHub User</h1>
          <h2>Please enter the name of the user you wish to view.</h2>
        </div>
        <div>
          <input 
            type='text' 
            placeholder = 'Enter GitHub account name here.' 
            value = {this.state.username}
            onChange = {this.handleChange}
           />
          <button onClick = {this.fetchUser}>
            Submit
          </button>
        </div>
      </div>

    );

  }

}

export default App;
