import React, { Component } from 'react';
import axios from 'axios';
import {FormStyleWrapper2} from "../../components/FormStyle2"; 


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
       
        axios.post(`${process.env.REACT_APP_API_URL}/contents`,
        
            { name, icon },
            { withCredentials: true }
        
        )

            .then(() => {
               
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
          .post(`${process.env.REACT_APP_API_URL}/contents-icon-upload`, uploadData)
          .then((response) =>
            this.setState({
              icon: response.data.secure_url,
            
            })
          )
          .catch((error) => console.log(error));
      }

  
            render(){
              return (
                  <div>

<FormStyleWrapper2>
                      <h2>Create a new content</h2>
                      <form onSubmit={this.handleFormSubmit}>
                          <div className="field">
                              <div className="control">
                                  <input
                                      className="inputForm"
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
                                      className="inputForm"
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
                      </FormStyleWrapper2>
                  </div>
              );
              }

}

export default FormContentsModal;