import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  Divider } from './Card';
import { Carousel } from 'antd';
import learnOnlineImg from '../../images/firstPage/LearnOnline.svg';
import learnOnline2 from '../../images/firstPage/SupportTeam.svg';
import learnOnline3 from '../../images/firstPage/OnlineShopping_1.svg';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardButton,
    CardLink
} from "../../components/auth/SignupStyle";
  


class LoginCard extends Component {
    constructor(){
    super()
    }

    render() {
        return (
          
            <CardWrapper>
        <CardHeader>
                    <CardHeading><h1 className="FocusMain">FOCUS</h1></CardHeading>
                    <h1 className="SubTitle">Study. Organize. Focus</h1> 
        </CardHeader>

                <CardBody>
                    
                                       
                    <Carousel autoplay >
                        <div>
                            <h2 className="subTitle">Add and watch your<br/>study videos</h2>
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
           
                <Divider />
                <div>
                <CardFieldset>
                            <Link to={"/signup"}><CardButton type="button">Sign Up</CardButton></Link>
                </CardFieldset>
                </div>
                
        <CardFieldset>
            <CardLink><Link to={"/login"} className="LinkLoginSignup">I already have an account.</Link></CardLink>
          </CardFieldset>
                    </CardBody>
                    </CardWrapper>   
    
    )
  }
}


export default LoginCard;