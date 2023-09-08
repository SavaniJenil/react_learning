import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidCatch()");
  }

  render() {
    // console.log("Parent Render()");
    return (
      <div>
        <h1>About Us Page</h1>
        <h3>This is a React Series</h3>
        {/* <User name="Jenil Savani"/> */}
        <UserClass name="Jenil Savani" />
        {/* <UserClass name="MG" />
        <UserClass name="DK" /> */}
      </div>
    );
  }
}

// const About = () => {
//     return <div>
//         <h1>About Us Page</h1>
//         <h3>This is a React Series</h3>
//         {/* <User name="Jenil Savani"/> */}
//         <UserClass name="Jenil Savani"/>
//         <UserClass name="MG"/>
//         <UserClass name="DK"/>
//     </div>
// };

export default About;

/* 
<<<<< Render Phase
->Parent constructor
->Parent render
--------Render childs as a single batch---------
->FirstChild constructor
->FirstChild render
->SecondChild constructor
->SecondChild render
->ThirdChild constructor
->ThirdChild render

>>>>>>
((((( Commit Phase
--------DOM update as a single batch---------
->FirstChild componentDidMount
->SecondChild componentDidMount
->ThirdChild componentDidMount

)))))

->Parent componentDidMount
*/
