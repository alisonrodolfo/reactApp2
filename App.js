import Navigation from './components/Navigation';
import * as React from 'react';
import axios from 'axios';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      textDisplay: false,
    };
  }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ textDisplay: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  //promises
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const {results} = response.data;
        this.setState({people: results })
      })

  }

  render() {
    return (
      <Navigation />
    );
  }
}



