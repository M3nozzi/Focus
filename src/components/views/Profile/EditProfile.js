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
// import AuthService from '../../auth/auth-service';
import ModalSuccess from "../../views/ModalSuccess";

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
    const classes = useStyles();

    const [values, setValues] = useState({
      name: props.loggedInUser.name,
      path: props.loggedInUser.path,
      password: "",
      error: '',
      id: props.loggedInUser._id,
    })
    
    const clickSubmit = () => {

      // const userData = new FormData();
      // console.log(values.name && userData.append('name', values.name));
      // values.password && userData.append('passoword', values.password);
      // values.path && userData.append('path', values.path)
      
      //console.log("VALUES DO EDIT PROFILE", values);
      // console.log("USER DATA ONSUBMIT", userData);
      // console.log("INSIDE SUBMIT VALUES ID: ", values.id);

      axios.put(`http://localhost:5000/api/profile/${values.id}`,
        {
           name:values.name,
           password: values.password,
           path: values.path

        }, {withCredentials:true}, {new:true}
        ).then( response => {
           console.log("RESPONSE DO PUT",response);
          // props.getUser(response.config.data);
          props.history.push('/profile' + '/' + values.id)
        })
        
    }

    const handleFileChange = event => {
      const uploadData = new FormData();
      uploadData.append('path', event.target.files[0]);
      
      axios
        .post("http://localhost:5000/api/upload", uploadData)
        
        .then(response => { 
          console.log(response)
          
          setValues({...values, path:response.data.secure_url});
          
          console.log("VALUE DOT PATH DEPOIS DA FOTO", values.path);
        })
        .catch(error => console.log(error));
        
    }

    const handleChange = name => event => {
      const value = name === 'path'
        ? (event.target.files[0]
        ): event.target.value
    
      setValues({...values, [name]: value })
    }

    // const handleFile = values
  
    //   if (values.redirectToProfile) {
    //     return (<Redirect to={'/user/' + values.id}/>)
    //   }
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              Edit Profile
            </Typography>
                  <Avatar src={values.path} className={classes.bigAvatar}/><br/>
            <input accept="image/*" onChange={handleFileChange} className={classes.input} id="icon-button-file" type="file" />
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
                  <ModalSuccess/>
          </CardActions>
        </Card>
      )
  }