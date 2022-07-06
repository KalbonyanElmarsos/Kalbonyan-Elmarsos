import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  // Only works when component will disappear from UI/DOM
  componentWillUnmount() {
    console.log("User component will destroyed");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
