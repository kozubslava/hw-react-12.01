import React,{ Component } from "react";
import UserData from "../UserData";
import "./style.css"

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArr: [
        { id: 1, name: "John Doe", gender: "Male" },
        { id: 2, name: "Alice Smith", gender: "Female" },
        { id: 3, name: "Bob Johnson", gender: "Male" },
        { id: 4, name: "Eva Brown", gender: "Female" },
        { id: 5, name: "Charlie Williams", gender: "Male" },
      ],
    };
  }
  handleDelete = (id) => {
    
    const newUsersArr = this.state.usersArr.filter((user) => id !== user.id  )
    this.setState({usersArr: newUsersArr})
    console.log(newUsersArr);
  };
  
  render() {
    
    
    return (
      <div>
        <ul className="userList">
          {this.state.usersArr.map((user) => (
            <li key={user.id}>
              <UserData  id={user.id} name={user.name} sex={user.gender} handleDelete={this.handleDelete}/>
              
            </li>
          ))}
        </ul>
      
    </div>
    )
    
  }
}

export default UserList;