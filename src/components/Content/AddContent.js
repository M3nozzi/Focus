import React from 'react';
import styled from "styled-components";


const AddContentCard = styled.div`
  background: #03dac6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #dd2476, #ff512f); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #dd2476, #ff512f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  height: 250px;
  width: 200px;
  border-radius: 10px;
  border: none;
  margin: auto 10px;
  box-shadow: 15px
    15px 40px black;
  outline: none;
  font-family: inherit;

  &:hover {
    background: #ff512a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #dd2476, #ffa000); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #dd2476,#ffa000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transform: scale(1.02);
    box-shadow: 20px 20px 50px black;
  }
`;

class AddContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          showForm: false,
        };
    }
  
  showFormCard = () => {
    this.setState({
        showForm: !this.state.showForm,
    })
  }

  getNewContent = e => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
      let firstName = data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1);
      let lastName = data.results[0].name.last[0].toUpperCase() + data.results[0].name.last.slice(1);
      let name = firstName + ' ' + lastName;
      let email = data.results[0].email;
      let pic = data.results[0].picture.large;
      let username = data.results[0].login.username;
      this.props.gettingUser({name, email, pic, username});
    }); 
  }
  
  render() {
    return (
      <AddContentCard
        className='NewUserButton'
        onClick={this.showFormCard}>
        <h1 style={{fontSize: '5rem'}}>+</h1>
        <h2>ADD NEW CONTENT</h2>
        <p style={{ color: '#BDBDBD',padding: '10px 0 20px',
            margin: '10px'}}>
        </p>
      </AddContentCard>
    );
  }
}

export default AddContent;