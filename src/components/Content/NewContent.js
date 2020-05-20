import React, {useState} from 'react';
import styled from "styled-components";
import Modal from '../views/Modal';

const NewContentCard = styled.div`
  background: #E8BABF;  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #DD2476, #FF512F);  
  background: linear-gradient(to right, #DD2476, #FF512F);  */
  color: white;
  height: 250px;
  width: 200px;
  border-radius: 10px;
  border: none;
  margin:  10px;
  box-shadow: 5x 5px 10px #DEDEDE;
  outline: none;
  font-family: inherit;

  &:hover {
    background: #03DAC6; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #03DAC6, #03DAC6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #03DAC6, #03DAC6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transform: scale(1.02);
    box-shadow: 5px 5px 10px black;
    cursor: pointer;
  }

`;

const NewContent = (props) => {


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
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  

    return (
      <div>
      <NewContentCard onClick={() => setIsModalVisible(true)}
        className='NewUserButton'>
        <h1 style={{fontSize: '5rem', color: "#FAFAFA"}}>+</h1>
        <h2 style={{color: "#FAFAFA"}}>ADD NEW CONTENT</h2>
        <p style={{ color: '#FAFAFA',padding: '10px 0 20px',
            margin: '10px'}}>
        </p>
      </NewContentCard>
        {
          isModalVisible ? (<Modal getAllContents={props.getAllContents} onClose={() => setIsModalVisible(false)} />)
             : null
         
        }
        </div>
    );
  
}

export default NewContent;