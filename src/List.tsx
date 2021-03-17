import { Button,  TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './store/rootReducer';
import { LoginAction } from './store/userStore/user.actions.async';
import Title from './Title';

const List = () => {
  const { userData, errorMessage, isLoggedIn } = useSelector((state: RootState) => state.user);
  
  // console.log(userData);
  const dispatch = useDispatch();

  const [ name, setName ] = useState(userData?.username || '');
  const [ email, setEmail ] = useState(userData?.email || '');    

  const handleLogin = () => {
    dispatch(LoginAction(name, email));
  }

  return (
    <div className='App'>
      <Title>Вход пользователя</Title>
      <Button title="Загрузить" onClick={handleLogin}>Загрузить</Button>
      <div className='UserInfo'>
        <TextField title="Name" label="Имя" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField title="Email" label="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>{errorMessage ? errorMessage : isLoggedIn}</div>
      <div>{userData?.email}</div>            
    </div>
  )
};

export default List;