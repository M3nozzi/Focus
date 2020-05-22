import React, { Component } from 'react';
import axios from 'axios';



class FormPlaylist extends  Component{

    constructor(props){
        super(props);

        this.state = {
            playlistUrl: "",
            name:'',
        }

    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showAddPlaylistForm = this.showAddPlaylistForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);

    }


    handleFormSubmit(event) {
        event.preventDefault();
        const playlistUrl = this.state.playlistUrl;
        const name = this.state.name;
        const contentId = this.props.theContent._id
       
        axios.post(`${process.env.REACT_APP_API_URL}/playlist`,
        
            { playlistUrl, name, contentId },
            { withCredentials: true }
        
        )

            .then(() => {
                this.props.getTheContent();
                this.setState({ playlistUrl:"", name: "" });
            })
            .catch((error) => console.log(error));   
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
    

    showAddPlaylistForm() {
        if (this.state.isShowing) {
            return (
              <div className="section">
                <h3 className="title is-3">Add Playlist</h3>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="field">
                    <div className="control">
                      <label className="label">Playlist LinkID</label>
                      <input
                        type="text"
                        name="playlistUrl"
                        value={this.state.playlistUrl}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
      
                  <input className="button" type="submit" value="Submit" />
                </form>
              </div>
            );
          }
        }
      
        render() {
          return (
            <div>
              <hr />
              <button className="button" onClick={() => this.toggleForm()}>
                Add Playlist
              </button>
              {this.showAddPlaylistForm()}
            </div>
          );
        }
   
       
}

export default FormPlaylist;