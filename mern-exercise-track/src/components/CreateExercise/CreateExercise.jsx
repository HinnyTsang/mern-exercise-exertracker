import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import * as axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css'

const CreateExercise = () => {

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const inputRef = useRef(null);


    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data.map(user => user.username));
                setUsername(res.data[0].username);
            })
            .catch();
    }, []);


    const onChangeUserName = (e) => setUsername(e.target.value);

    const onChangeDescription = (e) => setDescription(e.target.value);

    const onChangeDuration = (e) => setDuration(e.target.value);

    const onChangeDate = (date) => setDate(Date(date));

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        };

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log('Exercise added: ', res.data))
            .catch(err => console.log('Error :', err));
        // window.location = '/';
    }

    return (
        <div>
            <h3>Create New Exercise</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <select
                        ref={inputRef}
                        required
                        className='form-control'
                        value={username}
                        onChange={onChangeUserName}>
                        {
                            users.map(
                                user =>
                                    <option
                                        key={user}
                                        value={user}
                                    >{user}
                                    </option>
                            )
                        }
                    </select>

                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className='form-group'>
                    <label>Duration (in minutes):</label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <DatePicker
                        selected={date}
                        onChange={onChangeDate}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value="Create Exercise Log" className='btn btn-primary'/>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise