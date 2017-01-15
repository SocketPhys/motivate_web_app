import React, { PropTypes } from 'react';
import s from './nav.css';

const ifActive = (link,active) => {
  return (link==active) ? s["nav__link--active"]:s["nav__link--unactive"];
}

class Nav extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {active} = this.props;
    return (
      <div className={`${s["nav"]}`}>
        <div className={`${s["nav__wrapper"]}`}>
          <div className={`${s["nav__right"]}`}>
            <h4 className={`${s["nav__title"]}`}>Motivate</h4>
            <p className={`${s["nav__subtitle"]}`}>When procasinating helps others. Not you.</p>
          </div>
          <div className={`${s["nav__left"]}`}>
            <ul className={`${s["nav__links"]}`}>
              <li className={`${s["nav__link"]} ${ifActive("index",active)}`}><a>Dashboard</a></li>
              <li className={`${s["nav__link"]} ${ifActive("profile",active)}`}><a>Me</a></li>
              <li className={`${s["nav__link"]} ${ifActive("settings",active)}`}><a>Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Nav;
