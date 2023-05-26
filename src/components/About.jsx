import { Component } from "react";
import UserContext from "../utils/UserContext";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // best place to make api call
  }
  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({ user }) => {
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>;
          }}
        </UserContext.Consumer>

        <p>This is the about us page of our app</p>
        <Profile />
      </div>
    );
  }
}
export default About;
