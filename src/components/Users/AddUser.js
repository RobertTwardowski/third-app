import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEteredUsername] = useState('')
  const [enteredAge, setEteredAge] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
  }

  const usernameChangeHandler = event =>{
    setEteredUsername(event.target.value)
  }

  const ageChangeHandler = event =>{
    setEteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
