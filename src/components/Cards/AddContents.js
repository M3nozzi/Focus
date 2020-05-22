import React, { Component } from 'react'

export class AddContents extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            name: "",
            icon: "",
            banner:"", 
            errorMsgUsername: null,
            errorMsgPassword: null,
        }

        // this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }


    // handleFormSubmit() {
    
      
       
    // }
   
    render() {
        return (
            <div>
                <div className="field">
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        // onChange={handleFormSubmit('name')}
                        // defaultValue={values.name}    
                        
                    />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="icon" 
                        placeholder="icon"
                        // onChange={handleFormSubmit('icon')}
                        // defaultValue={values.icon}     
                    />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                    <input 
                        className="banner" 
                        type="text" 
                        name="banner" 
                        placeholder="banner"
                        // onChange={handleFormSubmit('banner')}
                        // defaultValue={values.banner}    
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContents
