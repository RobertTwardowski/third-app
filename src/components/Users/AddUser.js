import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'


const AddUser = props => {
  const [enteredUsername, setEteredUsername] = useState('')
  const [enteredAge, setEteredAge] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return
    }
    if(+enteredAge < 1){
      return;
    }
    props.onAddUser(enteredUsername,enteredAge)
    setEteredAge('')
    setEteredUsername('')
  }

  const usernameChangeHandler = event => {
    setEteredUsername(event.target.value)
  }

  const ageChangeHandler = event => {
    setEteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
