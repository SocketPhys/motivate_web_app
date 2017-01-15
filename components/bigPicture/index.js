import React, { PropTypes } from 'react';
import s from './big.css';

const Stat = ({title,subtext,number}) => {
  return <div className={`${s["stat"]}`}>
    <p className={`${s["stat__title"]}`}>{title}</p>
    <h1 className={`${s["stat__number"]}`}>{number}</h1>
    <p className={`${s["stat__sub-detail"]}`}>{subtext}</p>
  </div>
}
class BigPicture extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {name} = this.props;
    return (
      <div className={`${s["stats"]}`}>
        <div className={`${s["stats__half-background"]}`}>
        </div>

        <div className={`${s["stats__content"]}`}>
          <div className={`${s["stats__numbers"]}`}>
            <Stat title="Goals" subtext="cool stuff" number="4/5" />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Money on the line" subtext="Gotta deliver" number="$420" />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Next Deadline" subtext="days" number="8" />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Completed" subtext="in total" number="3" />
          </div>
        </div>
      </div>
    );
  }

}

BigPicture.defaultProps = {
  name: "David Sun"
}
export default BigPicture;
