import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './store/rootReducer';
import { LoginAction } from './store/userStore/user.actions.async';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const { userData, errorMessage, isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [checked, setCheck] = useState(false); 

  const onEmailChange = (evt: any) => {
    setEmail(evt.target.value)
  }

  const onNameChange = (evt: any) => {
    setName(evt.target.value)
  }

  const onCheckChange = (evt: any) => {
    setCheck(evt.target.checked)
  }

  const handleLogin = () => {
    dispatch(LoginAction(name, email));
  }


  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход пользователя
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              value={name}
              onChange={onNameChange}
              required
              fullWidth
              name="Name"
              label="Имя"
              type="name"
              id="name"
              autoComplete="current-name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={email}
              onChange={onEmailChange}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControlLabel
              control={
                <Checkbox 
                value="remember" 
                color="primary" 
                checked={checked}
                onChange={onCheckChange} 
                />
              }
              label="Запомнить меня"
      
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Загрузить
            </Button>
            
          </form>
          <div>{errorMessage ? errorMessage : isLoggedIn}</div>
          <div>{userData?.email}</div>  
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
    </Grid>
  );
}