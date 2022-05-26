import React, { useState, useRef } from 'react'
import * as axios from 'axios';


const CreateUser = () => {

  const [username, setUsername] = useState("");

  const inputRef = useRef(null);


  const onChangeUserName = (e) => setUsername(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    const user = {
      username: username,
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log('user added: ', res.data))
      .catch(err => console.log('Error :', err));

    setUsername('');

    // window.location = '/';
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            placeholder="username"
            onChange={onChangeUserName}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value="Create user" className='btn btn-primary'
            onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default CreateUser