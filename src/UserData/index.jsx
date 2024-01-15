import React,{ Component } from "react";

class UserData extends Component {
  render() {
    const {id, name, sex, handleDelete} = this.props
    
    return (
      <div>
      <p>id:{id}</p>
      <p>name: {name}</p>
      <p>sex: {sex}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
    )
    
  }
}

export default UserData;