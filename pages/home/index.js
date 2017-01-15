import React, { PropTypes } from 'react';
import g from '../global.css';
import s from './home.css';
import Nav from '../../components/nav';
import Big from '../../components/bigPicture';
import Title from '../../components/text/title';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Nav active="index"/>
        <Title colored={true} text="Hey David Sun!" subtext="let's get to work"/>
        <Big stats={[]}/>
      </div>
    );
  }

}

export default HomePage;
