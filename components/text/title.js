import React, { PropTypes } from 'react';
import s from './title.css';

class Title extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {text,subtext,colored} = this.props;
    return (
      <div className={`${s["title"]}  ${s["title--"+(colored ? "colored":"white")]}`}>
        <div className={`${s["title__content"]}`}>
          <h1 className={`${s["title__header"]}`}>{text}</h1>
          <p className={`${s["title__subtext"]}`}>{subtext}</p>
        </div>
      </div>
    );
  }

}

export default Title;
