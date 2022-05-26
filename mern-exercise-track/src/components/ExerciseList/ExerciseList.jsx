import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Exercise = ({ exercise, deleteExercisee }) => {

  const { _id, username, description, duration, date } = exercise;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${_id}`}>edit</Link>{" | "}
        <a href='#' onClick={() => deleteExercisee(_id)} >delete</a>
      </td>
    </tr>
  );
}


const ExerciseList = () => {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        setExercises(res.data);
      })
      .catch(err => { console.log('Error :', err) })
  }, []);

  const ListExercises = () => {
    return exercises.map(exercise =>
      <Exercise
        exercise={exercise}
        deleteExercisee={deleteExercisee}
        key={exercise._id} />
    )
  }



  const deleteExercisee = (id) => {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data))

    setExercises(prev => prev.filter(exercise => exercise._id != id));
  }




  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {<ListExercises />}
        </tbody>
      </table>

    </div>
  )
}

export default ExerciseList