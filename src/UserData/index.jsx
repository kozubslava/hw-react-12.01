import React,{ Component } from "react";

class UserData extends Component {
  render() {
    const {id, name, sex} = this.props
    
    return (
      <div>
      <p>id:{id}</p>
      <p>name: {name}</p>
      <p>sex: {sex}</p>
    </div>
    )
    
  }
}

export default UserData;