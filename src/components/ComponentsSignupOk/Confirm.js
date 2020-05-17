import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import creativity from '../../images/Onboarding/Creativity.svg'


const styles = {
    button: {
        margin: 15
    }
}

export class Confirm extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            // <MuiThemeProvider>
                <React.Fragment>
                    <h1>Focus.</h1>
                    <img src={creativity} alt="image" />
                    <p> Organize your study videos <br /> Study without distractions <br />
                    and focus to achieve your goals!
                    </p>
                    
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        label="continue" 
                        primary={true}
                        style={styles.button} 
                        onClick={this.continue} />
                    
                    <Button 
                        label="back" 
                        primary={false} 
                        color="secondary"
                        style={styles.button} 
                        onClick={this.back} />

                </React.Fragment>
            // </MuiThemeProvider>
           
        )
    }
}

export default Confirm;