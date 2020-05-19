import React from 'react';
import styled from "styled-components";



const NewContentCard = styled.div`
  background: #F97D7D;  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #DD2476, #FF512F);  
  background: linear-gradient(to right, #DD2476, #FF512F);  */
  color: white;
  height: 250px;
  width: 200px;
  border-radius: 10px;
  border: none;
  margin: auto 10px;
  box-shadow: 5x 5px 10px #DEDEDE;
  outline: none;
  font-family: inherit;

  &:hover {
    background: #03DAC6; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3ACCE1, #03DAC6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3ACCE1, #03DAC6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transform: scale(1.02);
    box-shadow: 20px 20px 50px black;
  }

`;

class NewContent extends React.Component {

    constructor(props) {
        super(props);

    }
//   static defaultProps = {
//     name: 'Bob',
//     email: 'default@email.com',
//     pic: 'default.jpg'
//   }

//   getNewContent = e => {
//     fetch('https://randomuser.me/api/')
//       .then(response => response.json())
//       .then(data => {
//       let firstName = data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1);
//       let lastName = data.results[0].name.last[0].toUpperCase() + data.results[0].name.last.slice(1);
//       let name = firstName + ' ' + lastName;
//       let email = data.results[0].email;
//       let pic = data.results[0].picture.large;
//       let username = data.results[0].login.username;
//       this.props.gettingUser({name, email, pic, username});
//     }); 
//   }
  
  render() {
    return (
      <NewContentCard 
        className='NewUserButton'>
        <h1 style={{fontSize: '5rem'}}>+</h1>
        <h2>ADD NEW CONTENT</h2>
        <p style={{ color: '#FAFAFA',padding: '10px 0 20px',
            margin: '10px'}}>
        </p>
      </NewContentCard>
    );
  }
}

export default NewContent;