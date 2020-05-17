import React,  {Component, useState } from 'react';
import { Card, Avatar, Input, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
import Loading from '../tools/Loading';
import axios from 'axios';
import AddContents from './AddContents';




const { Search } = Input;

const gridStyle = {
    marginLeft: "20px",
    textAlign: 'center',
};
  
export class Main extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
            loading: false,
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/contents')
            .then(response => {
                console.log(response);
                this.setState({
                    contents: response.data
                });
            })
            .catch(error => console.log(error));
    }


    render() {

        const { Meta } = Card;
      
        return (
            <div><Search style={{ width: 200 }} placeholder="Search" prefix={<SearchOutlined />} />
                
    
                <button >Add Content</button>
                         
                    <Row gutter={{xs:8,sm:16, md:24, lg:32}}>
                                     
                    {
                        this.state.contents.map((contents, idx) => {
                            console.log(contents);
                            return (
                                <Col style={gridStyle} className="gutter-row" span={6}>
                        <Card key={idx}
                            style={{ width: 300 }}
                            cover={        
                                    contents.banner 
                                    ? (<img src={contents.banner} alt="banner" />
                                    ) : (
                                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    )
                                }

                            actions={[ <SettingOutlined key="setting" />,<EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}> 
                        <Meta
                            avatar={
                             contents.owner.path ? ( <Avatar src={contents.owner.path} /> ): (<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />)}
                            title={contents.name}
                            description={contents.name}
                        />
                                    </Card>
                                    </Col> 
                        )

                        })}
                               
                        </Row>
                </div>
            );//closes return
  } //closes render
} //closes component

export default Main;






 
