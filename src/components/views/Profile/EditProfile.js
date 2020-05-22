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
  
export default function EditProfile({ getUser, loggedInUser, history }) {
    
    const classes = useStyles();

    const [values, setValues] = useState({
      name: loggedInUser.name,
      path: loggedInUser.path,
      password: "",
      error: '',
      id: loggedInUser._id,
    })
    
    const clickSubmit = () => {

    
      
      if(values.password.trim() === "")
      {
        
        return setValues({...values, error: "Cannot be Empty!"})
      }
     

      axios.put(`${process.env.REACT_APP_API_URL}/profile/${values.id}`,
        {
           name:values.name,
           password: values.password,
           path: values.path

        }, {withCredentials:true}, {new:true}
      ).then(response => {
          getUser(response)
         
            getUser(response.data);
          history.push('/profile' + '/' + values.id)
        })
        
    }

    const handleFileChange = event => {
      const uploadData = new FormData();
      uploadData.append('path', event.target.files[0]);
      
      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, uploadData)
        
        .then(response => { 
        
          setValues({...values, path:response.data.secure_url});
          
         
        })
        .catch(error => console.log(error));
        
    }

    const handleChange = name => event => {
      const value = name === 'path'
        ? (event.target.files[0]
        ): event.target.value
    
      setValues({...values, [name]: value })
    }


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
            
            <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal" required/>
            <br/> {
              values.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}/> 
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