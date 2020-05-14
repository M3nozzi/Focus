import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Cards, Divider, Icon } from './Card';
import Button from './Button';

class LoginCard extends Component {
    constructor(){
    super()
    }

    render() {
        return (
            <Cards>
            <header>
                <Icon>FOCUS</Icon>
                <h1>FOCUS</h1>
            </header>
                <Divider />
                <div>
                    <Button primary> <Link to='/signup' style={{ textDecoration: 'none',  color: 'white'}}>SIGN UP</Link></Button>
                </div>
        </Cards>
    )
  }
}


export default LoginCard;