import React, { useState, useRef, useEffect } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'

const EditExercise = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const [_id, set_id] = useState('');
  const inputRef = useRef(null);



  useEffect(() => {

    const id = location.pathname.split('/')[2];
    set_id(id);

    console.log('http://localhost:5000/exercises/' + id);

    axios.get('http://localhost:5000/exercises/' + id)
      .then(res => {
        console.log("Success");
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      })
      .catch(err => {
        console.log('Error: ', err)
      });

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

    axios.post('http://localhost:5000/exercises/update/' + _id, exercise)
      .then(res => console.log('Exercise updated: ', res.data))
      .catch(err => console.log('Error :', err));

      
    window.location = '/';
  }

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={onChangeUserName}
          />
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
          <input type='submit' value="Edit Exercise Log" className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default EditExercise