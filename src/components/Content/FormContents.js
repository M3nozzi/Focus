import React, { Component } from 'react';
import axios from 'axios';



class FormContents extends  Component{

    constructor(props){
        super(props);

        this.state = {
            name:"",
            icon:"",
        
        }

    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.showAddContentForm = this.showAddContentForm.bind(this);
        
    }


    handleFormSubmit(event) {
        event.preventDefault();
        const { name, icon } = this.state;
       
        axios.post('http://localhost:5000/api/contents',
        
            { name, icon },
            { withCredentials: true }
        
        )

            .then(() => {
                this.props.getData();
                this.setState({ 
                    name: "",
                    icon: "", 
                });
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

    handleFileChange(event) {
        const uploadData = new FormData();
    
        uploadData.append("icon", event.target.files[0]);
            
        axios
          .post("http://localhost:5000/api/contents-icon-upload", uploadData)
          .then((response) =>
            this.setState({
              icon: response.data.secure_url,
         
            })
          )
          .catch((error) => console.log(error));
      }

      showAddContentForm() {
          if (this.state.isShowing) {
              return (
                  <div>
                      <div className="social-container">
                      </div>
            
                      <p>Create a content</p>
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
                                  <span className="file-label">Choose a file…</span>
                               
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
              Add New Content
            </button>
            {this.showAddContentForm()}
          </div>
        );
      }
}

export default FormContents;