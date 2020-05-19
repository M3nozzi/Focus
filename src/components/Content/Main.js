import React,  {Component, useState } from 'react';
// import { Card, Avatar, Input, Row, Col } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
// import Loading from '../tools/Loading';
import axios from 'axios';
// import AddContents from '../Cards/AddContents';
import Search from './Search';
import CardBox from './CardBox';
import styled from 'styled-components';
import NewContent from './NewContent';
import AddContent from './AddContent';
import { Link } from "react-router-dom";
import FormContents from '../../components/Content/FormContents';


const gridStyle = {
    marginLeft: "20px",
    textAlign: 'center',
};

const HomeContentWrapper = styled.div`
  height: 100%;
  /* display: flex; */
  box-sizing: border-box;
  flex-direction: column;
    justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem auto
    1.75rem 1.75rem;
`;

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contents: [],
            loading: false,
            searchState: "",
            showForm: false, 
        }
        this.getAllContents = this.getAllContents.bind(this);
        this.searchForm= this.searchForm.bind(this);
    }

    getAllContents()
    {
        axios
            .get('http://localhost:5000/api/contents')
            .then(response => {
                console.log("RESPONSE DO GETCONTENTS",response);
                this.setState({
                    contents: response.data
                    // contents.map(content => { response.data }) 
                });
            })
            .catch(error => console.log(error));
    }
    
    componentDidMount() {
    
        this.getAllContents();
    }


    //SEARCH NO MAIN
    searchForm (search) {

        this.setState({
        searchState: search.toLowerCase(),
        })
    }

    showFormCard = () => {
        this.setState({
            showForm: !this.state.showForm,
        });
    }

  
    render() {

        const { contents, searchState } = this.state;
     
        console.log("SearchState", this.state.searchState);
        return (
            
            <HomeContentWrapper>
                <Search position="center" searchForm={this.searchForm}/>
                <Container>
                    {
                        contents.filter(item => item.name.toLowerCase().includes(searchState)).map((contents, idx) => {
                            return <Link key={idx}  to={`/contents/${contents._id}`}> <CardBox name={contents.name} icon={contents.icon} owner={contents.owner.name} /></Link>
                            }) 
                    }
                    <NewContent onClick={this.showFormCard} />
                    {
                        this.state.showForm ? <AddContent showFormCard={this.showFormCard}/>
                        : "..."
                    }
                </Container>
            
                <div style={{ width: "40%", float: "right" }}>
          <FormContents getData={this.getAllContents} />
        </div>
            
            {/* <Search style={{ width: 200 }} placeholder="Search" prefix={<SearchOutlined />} /> */}
                
{/*     
                <button onClick={()=> this.add()} >Add Content</button>
                         {this.state.render && <AddContents/>}
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
                    
                               
                </Row> */}
                
            </HomeContentWrapper>

        );//closes return
  } //closes render
} //closes component

export default Main;






 
