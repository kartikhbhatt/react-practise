import React from "react";

class UserClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         count2: 1,
      };
      console.log("child constructor");
   }
   componentDidMount() {
      console.log("child component mounted");
   }
   render() {
      console.log("child rendered");

      const { name, location } = this.props;
      const { count, count2 } = this.state;
      return (
         <div className="user-card">
            <h1>Count: {count}</h1>
            <button
               onClick={() => {
                  this.setState({ count: this.state.count + 1 });
               }}
            >
               Click
            </button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: +91-99999999999</h4>
         </div>
      );
   }
}
export default UserClass;
