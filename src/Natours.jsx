import React from 'react';

import './css/Natours.css';
import logo from './img/logo-white.png';

class Natours extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="body"><div></div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
            {/*<i className="fa fas-globe fa-spin"/>*/}
          </div>

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Travels</span>
              <span className="heading-primary--sub">and adventures</span>
            </h1>

            <a href="#" className="header-btn header-btn--white header-btn--down-animated">Discover our tours</a>

          </div>
        </header>
      </div>
    );
  }
}

export default Natours;
