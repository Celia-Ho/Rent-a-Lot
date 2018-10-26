import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    try {
      await this.props.getHomePageData();

      this.setState({
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let homeButtons = (
      <span>
        <Link to="/login" className="btn btn-primary btn-lg mr-2" role="button">Sign in</Link>
        <Link to="/register" className="btn btn-primary btn-lg" role="button" >Join now </Link>
      </span>
    );

    if (localStorage.getItem("jwtToken")) {
      homeButtons = (
        <span>
          <Link to="/spot/new" className="btn btn-primary btn-lg mr-2"> Post a New Spot </Link>
        </span>
      );
    }

    return (
      <div>
        {/* The Jumbotron Area */}
        <div id="jumbotron" className="jumbotron text-center">
          <h1 className="display-3 mb-5">
          </h1>
          <p className="lead jumbotron-title display-4" style={{ color: 'white' }}>Rent-a-Lot</p>
          <br />

          <p className="lead jumbotron-title display-5" style={{ color: 'white' }}>Can't find a parking spot?</p>
          <p className="lead jumbotron-title display-5" style={{ color: 'white' }}>Want to rent out your vacant lot?</p>
          <p className="lead jumbotron-title display-5" style={{ color: 'white' }}>We're here to help!</p>
          <br />

          <br />
          <p className="lead">
            {homeButtons}
            {/* End of the home button */}
          </p>
        </div>
        {/* End of the jumbotron area */}
      </div>
    );
  }
}
