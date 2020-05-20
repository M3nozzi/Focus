import React, { Component } from 'react';
import axios from 'axios';


class FormContentsModal extends  Component{

    constructor(props){
        super(props);

        this.state = {
            name:"",
            icon:"",
        
        }

    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
           
    }


    handleFormSubmit(event) {
        event.preventDefault();
        const { name, icon } = this.state;
       
        axios.post('http://localhost:5000/api/contents',
        
            { name, icon },
            { withCredentials: true }
        
        )

            .then(() => {
                // this.props.getData();
                this.setState({ 
                    name: "",
                    icon: "", 
                });
                this.props.getAllContents();
                this.props.onSuccess();

            })
            .catch((error) => console.log(error));   
    }

   

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
  
    handleFileChange(event) {
        const uploadData = new FormData();
    
        uploadData.append("icon", event.target.files[0]);
            
        axios
          .post("http://localhost:5000/api/contents-icon-upload", uploadData)
          .then((response) =>
            this.setState({
              icon: response.data.secure_url,
            //   originalName: response.data.originalName,
            })
          )
          .catch((error) => console.log(error));
      }

  
            render(){
              return (
                  <div>

                      <h2>Create a new content</h2>
                      <form onSubmit={this.handleFormSubmit}>
                          <div className="field">
                              <div className="control">
                                  <input
                                      className="input"
                                      type="text"
                                      name="name"
                                      value={this.state.name}
                                      placeholder="Content Name"
                                      onChange={this.handleChange}
                                  />
                              </div>
                    
                          </div>

                          <div className="field">
                              <div className="control">
                                  <input
                                      className="input"
                                      type="file"
                                      name="icon"
                                      onChange={this.handleFileChange}
                                  />
                                    <span className="file-icon">
                                      <i className="fas fa-upload"></i>
                                  </span>
                              
                              </div>
                          </div>

                          <input className="buttonSubmit" type="submit" value="Submit" />
                          
                      </form>
          
                  </div>
              );
              }

}

export default FormContentsModal;