import React, { useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import FileUpload from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import AuthService from '../../auth/auth-service';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle
    },
    error: {
      verticalAlign: 'middle'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: 'auto'
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px'
    }
  }))
  
  export default function EditProfile(props) {
    console.log("Props do EDIT USER: ", props);
    const classes = useStyles()
    const [values, setValues] = useState({
      name: props.loggedInUser.name,
      path: props.loggedInUser.path,
      password: "",
      error: '',
      id: props.loggedInUser._id,
    })


    // const jwt = auth.isAuthenticated()
    //const isLoggedIn = autloggedin();
  
    // useEffect(() => {
    //   const abortController = new AbortController()
    //   const signal = abortController.signal
  
    //   read({
    //     userId: match.params.userId
    //   }, {t: jwt.token}, signal).then((data) => {
    //     if (data & data.error) {
    //       setValues({...values, error: data.error})
    //     } else {
    //       setValues({...values, id: data._id, name: data.name})
    //     }
    //   })
    //   return function cleanup(){
    //     abortController.abort()
    //   }
  
    // }, [match.params.userId])
    
    const clickSubmit = () => {

      let userData = new FormData();
      values.name && userData.append('name', values.name)
      values.password && userData.append('password', values.password)
      values.path && userData.append('path', values.path)
      
      console.log("VALUES DO EDIT PROFILE", values);

      console.log("USER DATA ONSUBMIT", userData);

      axios.put(`http://localhost:5000/api/profile/${values.id}`,
        {
          id:values.id, userData
        }, {withCredentials:true}
        ).then(()=> {
          props.history.push('/profile' + '/' + values.id)
        })
        
    }


    const handleChange = name => event => {
      const value = name === 'path'
        ? event.target.files[0]
        : event.target.value
    
      setValues({...values, [name]: value })
    }
  
      if (values.redirectToProfile) {
        return (<Redirect to={'/user/' + values.id}/>)
      }
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              Edit Profile
            </Typography>
                  <Avatar src={values.path} className={classes.bigAvatar}/><br/>
            <input accept="image/*" onChange={handleChange('photo')} className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <Button variant="contained" color="default" component="span">
                Upload
                <FileUpload/>
              </Button>
            </label> <span className={classes.filename}>{values.path ? values.path.name : ''}</span><br/>
            <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
                  <br />
            <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
            <br/> {
              values.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}>error</Icon>
                {values.error}
              </Typography>)
            }
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
          </CardActions>
        </Card>
      )
  }