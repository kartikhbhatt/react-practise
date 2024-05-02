import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
   constructor(props) {
      super(props);
      console.log("parent constructor");
   }
   componentDidMount() {
      console.log("Parent component mounted");
   }
   render() {
      console.log("parent component rendered");

      return (
         <div>
            <h1>About</h1>
            {/* <User name={"functional Component"} /> */}
            <UserClass
               name={"Class based component"}
               location={"location class"}
            />
         </div>
      );
   }
}
// const About = () => {
//    return (
//       <div>
//          <h1>About</h1>
//          {/* <User name={"functional Component"} /> */}
//          <UserClass
//             name={"Class based component"}
//             location={"location class"}
//          />
//       </div>
//    );
// };

export default About;
