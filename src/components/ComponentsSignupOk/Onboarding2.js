import React, { Component } from 'react';
import styled from 'styled-components';
import creativity from '../../images/Onboarding/Creativity.svg'
import { CardWrapper, CardButton } from "../auth/SignupStyle"; 
import { Link } from 'react-router-dom';



const Wrapper = styled.div`
     {
        text-decoration: none;
        color: #707070;
        margin-top:15px;
        font-family: 'Roboto';
        font-weight:700;
    }

    p {
        font-weight:400;
    }
`;

 class Onboarding2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <React.Fragment>
            <CardWrapper>
            <h1>Focus.</h1>
            <img src={creativity} alt="image" />
            <Wrapper> Organize your study videos <br /> Study without distractions <br />
            and focus to achieve your goals!
            </Wrapper>
            
            <Link to={"/main"}><CardButton> OK</CardButton></Link>
            </CardWrapper>
            {/* <CardButton label="back" primary={false}
                 onClick={this.back} >Back</CardButton> */}
        </React.Fragment>
             
        )
        }
 }
export default Onboarding2;



// const styles = {
//     button: {
//         margin: 15
//     }
// }

// export class Confirm extends Component {
    
//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     }
//     back = e => {
//         e.preventDefault();
//         this.props.prevStep();
//     };


//     render() {
//         const { values, handleChange } = this.props;
//         return (
//             // <MuiThemeProvider>
//                 <React.Fragment>
//                     <h1>Focus.</h1>
//                     <img src={creativity} alt="image" />
//                     <p> Organize your study videos <br /> Study without distractions <br />
//                     and focus to achieve your goals!
//                     </p>
                    
//                     <button
//                          primary={true}
//                         style={styles.button} 
//                         onClick={this.continue} />
                    
//                     {/* <Button 
//                         label="back" 
//                         primary={false} 
//                         color="secondary"
//                         style={styles.button} 
//                         onClick={this.back} /> */}

//                 </React.Fragment>
//             // </MuiThemeProvider>
           
//         )
//     }
// }

// export default Confirm;