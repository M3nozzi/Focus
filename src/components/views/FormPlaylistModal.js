import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FormStyleWrapper} from "../../components/FormStyle"; 


class FormPlaylistModal extends  Component{

    constructor(props){
        super(props);

        this.state = {
            playlistUrl: "",
            name:'',
            regexUrl: /^.*(youtu.be\/|list=)([^#\&\?]*).*/,
            error: "",
            success: false,

        }

    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showAddPlaylistForm = this.showAddPlaylistForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.validateYoutubeUrl = this.validateYoutubeUrl.bind(this);


                
    }



    handleFormSubmit(event) {
        event.preventDefault();

        if(this.state.playlistUrl === "" || this.state.name === "")
        {
          this.setState({error: "Cannot submit with empty fields! Please try again!"});
          return this.state.error;
        }

        const playlistUrl = this.state.playlistUrl;
        const name = this.state.name;
        const contentId = this.props.theContent._id
       
        axios.post('http://localhost:5000/api/playlist',
        
            { playlistUrl, name, contentId },
            { withCredentials: true }
        
        )

            .then(() => {
                this.props.getTheContent();
                this.setState({ playlistUrl:"", name: "", error: "", success: true});
              
            })
            .catch((error) => {
              console.log(error);
              this.setState({success: false});
            });   
    }

   
    handleChange(event) {
        
      const { name, value } = event.target;

          this.setState({ [name]: value });

    }

    toggleForm() {
        this.setState((prevState) => {
          return {
            isShowing: !prevState.isShowing,
          };
        });
    }
    
  

    validateYoutubeUrl(event) {


      this.setState({error: "", success: false});
      let name = event.target.name;
      let url = event.target.value;
      console.log("Entrada no onChange da url", url);
    
      if (this.state.regexUrl.test(url)) {
           console.log("Depois do if", url);
       
      let newUrl = url.split("&list=")[1];
      console.log("PlaylistId depois do split", newUrl);
      console.log("Evento da url", event.target.name);

      this.setState({[name]: newUrl }, () => {
        console.log(this.state.playlistUrl);

      });
    }
    else 
    {
      
      this.setState({error: "Invalid Link, please insert a youtube link with this pattern: https://www.youtube.com/watch?v=____&list=____"});
      this.setState({playlistUrl: ""});
      return this.state.error;


  }
}


    showAddPlaylistForm() {
        if (this.state.isShowing) {
            return (
                <FormStyleWrapper>
              <div className="section">
                 <form onSubmit={this.handleFormSubmit}>
                  <div className="field">
                    <div className="control">
                               <input
                                   
                                    className="inputForm"
                                    type="text"
                                    name="playlistUrl"
                                    placeholder="Insert Youtube Playlist URL"
                                    value={this.state.playlistUrl}
                                    onChange={this.validateYoutubeUrl}
                             
                      />
                      {
                        this.state.error ? <p className="help is-danger">{this.state.error}</p> : <p style={{color: "#434343",fontSize: "12px", opacity: 0.5}}>"Post your link to check if it's valid"</p>
                      }
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                                 <input 
                                    className="inputForm"           
                           
                                type="text"
                                name="name"
                                    maxlength="16"
                                    placeholder="Choose a name for this playlist"
                        value={this.state.name}
                        onChange={this.handleChange}
                                   
                    />
                       
                    </div>
                  </div>
      
                  <input className="buttonFormSubmit" type="submit" value="Submit"/>
                  {
                    this.state.success ? <p style={{fontSize: "12px", color: "#03DAC6"}}>Playlist Uploaded with success! <br/> Check it out at the end. </p>: ""
                  }
                </form>
                    </div>
                    </FormStyleWrapper>
            );
          }
        }
      
        render() {
          return (
            <div>
              <hr />
              <button className="buttonForm" onClick={() => this.toggleForm()}>
                Add New Playlist
              </button>
              {this.showAddPlaylistForm()}
            </div>
          );
        }
   
       
}

export default FormPlaylistModal;


  // /list=(.+)[/&]?/
    
    // let regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    // const youtubeOk = (playlist) => {
        
    //     let regExp = /^.*(youtu.be\/|list=)([^#\&\?]*).*/
    //     return (url.match(regExp)) ? url.split("/list=")[1] : false;

    // };

    