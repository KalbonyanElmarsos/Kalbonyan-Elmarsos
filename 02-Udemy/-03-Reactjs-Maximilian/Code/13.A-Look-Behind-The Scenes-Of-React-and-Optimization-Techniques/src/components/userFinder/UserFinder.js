import React from "react";

import { Fragment, useState, useEffect } from "react";

import finderStyles from "./UserFinder.module.css";

import Users from "../Users.js";
import UserContext from "../../contextAPI/users-context";
import ErrorBoundary from "../ErrorBoundary";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// -Class-based component
class UserFinder extends React.Component {
  //  the second way to consume context besides the consumer-component approach
  static contextType = UserContext;
  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: "" };
    // this.state = { filteredUsers: DUMMY_USERS, searchTerm: "" };
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  componentDidUpdate(prevProps, prevState) {
    //  A condition to avoid infinity re-rendering
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          // filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  // will work once after component rendered
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
    // this.setState({ filteredUsers: DUMMY_USERS });
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <div className={finderStyles.finder}>
            <input
              type="search"
              onChange={this.searchChangeHandler.bind(this)}
            />
          </div>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// -Functional-based component
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={finderStyles.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
