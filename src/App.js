import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuiv4 } from "uuid";
import AddUserForm from "./components/ AddUserForm";
import EditUserForm from "./components/EditUserForm";
function App() {
  const usersData = [
    { id: uuiv4(), name: 'Tania', username: 'floppydiskette', age:"19" },
    { id: uuiv4(), name: 'Craig', username: 'siliconeidolon', age:"29" },
    { id: uuiv4(), name: 'Ben', username: 'benisphere', age:"35" },
  ]

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null, name: "", username: "", age:""
  })

  const addUser = (user) => {
    user.id = uuiv4()
    setUsers([
      ...users,
      user
    ])
  }

  const updateUser =(id, updateUser)=>{
    setEditing(false);
    setUsers(users.map(user=>(user.id=== id ? updateUser:user)))
  }

  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado)
  }

  const editRow = (user) => {
    console.log("hye")
    console.log({ user })
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username,age: user.age
    })
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>EditUserForm</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />

              </div>
            ) : <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          }


        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
