import React, {Component} from 'react';
import styled from 'styled-components';


const Paragraph = styled.p`
  font-size: 70%;
  font-weight: 400;
  font-family: 'Roboto';
`;

const HeaderH3 = styled.h3`
    margin: 0 0 3px;
    font-size: 150%;
    font-family: 'Roboto';
    font-weight: 700;
`;

const HeaderH5 = styled.h5`
    margin: 0 0 3px;
    font-weight: 400;
`;

const UserCard = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #DEDEDE;
    margin: 10px;
    background: #FAFAFA;  /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #0c2b5e, #173c77);  Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to left, #0c2b5e, #173c77); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const UserCardImg = styled.img`
    width: 120px;
    height: 120px;
    margin: 8px 0 0 0;
    border-radius: 50%;
    border: 4px solid  #FAFAFA;
    object-fit: cover;
`;

const UserCardTop = styled.div`
  height: 52%;
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: ##434343;
`;

const UserCardBottom = styled.div`
    min-height: 40%;
    overflow: auto;
    min-width: 100%;
    max-width: 100%;
    padding: 0 10px 5px;
    overflow-wrap: break-word;
    color: #434343;
    :-webkit-scrollbar {width: 3px; height:1px;transition:all .5s;z-index:10;
    :-webkit-scrollbar-track {background-color: #0c2b5e;
    :-webkit-scrollbar-thumb {background-color: #bec4c8; border-radius:3px;
`;

class CardBox extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    
    render() {
        
        const {name, icon, owner } = this.props;
        
        return(
            
            <UserCard>
                <UserCardTop>
                    <UserCardImg src={icon} alt={name}/>
                </UserCardTop>
                <UserCardBottom>
                    <HeaderH3>{name}</HeaderH3>
                    <Paragraph>Created by </Paragraph>
                    <HeaderH5>{owner}</HeaderH5>
                </UserCardBottom>
            </UserCard>
        );
    }

}

export default CardBox;