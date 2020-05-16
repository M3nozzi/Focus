import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Cards, Divider, Icon } from './Card';
import Button from './Button';
import { Carousel } from 'antd';
import learnOnlineImg from '../../images/firstPage/LearnOnline.svg';
import learnOnline2 from '../../images/firstPage/SupportTeam.svg';
import learnOnline3 from '../../images/firstPage/OnlineShopping_1.svg';

class LoginCard extends Component {
    constructor(){
    super()
    }

    render() {
        return (
            <Cards>
            <header>
                <Icon className="iconFocus">FOCUS</Icon>
                    <h1 className="SubTitle">Study. Organize. Focus</h1>                    
                    <Carousel autoplay >
                        <div>
                            <h2 className="subTitle">Organize your<br/>Study videos</h2>
                           <img src={learnOnlineImg} alt="girl studying online" />
                        </div>
                        <div>
                            <h2 className="subTitle">Study without<br/>distractions</h2>
                            <img src={learnOnline2 } alt="studying online" />
                        </div>
                        <div>
                            <h2 className="subTitle">Focus to achieve <br/>your goals!</h2>
                            <img src={learnOnline3} alt="studying online" />
                        </div>
                    </Carousel>
            </header>
                <Divider />
                <div>
                    <Button primary> <Link to='/signup' style={{ textDecoration: 'none',  color: 'white'}}>SIGN UP</Link></Button>
                </div>
                <p>
                Already have account?
                <Link className='loginLink' to={"/login"}> Login</Link>
                <br/>
                </p>
        </Cards>
    )
  }
}


export default LoginCard;