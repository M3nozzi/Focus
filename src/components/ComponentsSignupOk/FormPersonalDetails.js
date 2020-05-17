import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import organizeIcon from '../../images/Onboarding/Officeworker.svg'

export class FormPersonalDetails extends Component {
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
                    <h1>Organize.</h1>
                    <img src={organizeIcon} alt="image" />
                    <p> Organize your study videos <br /> Study without distractions <br />
                    and focus to achieve your goals!
                    </p>
                    
                    <Button  label="Continue" primary={true}
                        style={styles.button} onClick={this.continue} />
                    
                    <Button label="back" primary={false}
                        style={styles.button} onClick={this.back} />
                </React.Fragment>
            // </MuiThemeProvider>
           
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;