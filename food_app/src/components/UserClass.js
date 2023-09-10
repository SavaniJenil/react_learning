import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Constructor");
    this.state = {
    //   count: 0,
    //   count2: 10,
    userInfo: {
        name:"Dummy",
        location: "Default",
        avatar_url: "http:/dummy-photo.com"
    }
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount()");
    const data = await fetch("https://api.github.com/users/Jenil666");
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount is called")
  }
  
  render() {
    // const { name } = this.props;
    // console.log(this.props.name + "Render()");
    const { name, avatar_url, company, location } = this.state.userInfo
    return (
      <div className="user-card mt-3 p-4 w-7/12 m-auto border border-black rounded-lg">
        {/* <h1>
          Count and Count2 is : {this.state.count} {this.state.count2}
        </h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY LIKE this.state.count = this.state.count + 1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 - 1,
            });
          }}
        >
          count update
        </button> */}

        <div className="user-profile flex flex-row justify-start items-center font-semibold">
            <img className="user-logo h-20 w-20 mr-5 m-3 rounded-full" src={avatar_url} />
            <h1 className="text-2xl">Name: {name}</h1>
        </div>
        <h3 className="text-xl">Location: {company}{", "} {location}</h3>
      </div>
    );
  }
}

export default UserClass;



/*

-----MOUNT CYCLE-----
constructor(dummy data)
render(dummy data)
    <HTML render with dummy data>
componentDidMount()-->API call
    setState()--> this will update data from API


-----UPDATE CYCLE-----
render(API data)
    <HTML render with API data>
componentDidUpdate()

*/
