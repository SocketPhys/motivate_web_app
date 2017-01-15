import React, { PropTypes } from 'react';
import g from '../global.css';
import s from './home.css';
import Nav from '../../components/nav';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Nav active="index"/>
      </div>
    );
  }

}

export default HomePage;
