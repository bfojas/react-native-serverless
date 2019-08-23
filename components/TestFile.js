import React from 'react';
import {Text} from 'react-native';
import axios from 'axios';
import {REACT_APP_GET_ENDPOINT} from 'react-native-dotenv';

class TestFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  componentDidMount = () => {
    axios.get(`${REACT_APP_GET_ENDPOINT}`).then(res => {
      this.setState({message: res.data});
    });
  };

  render() {
    return <Text>{this.state.message}</Text>;
  }
}

export default TestFile;
