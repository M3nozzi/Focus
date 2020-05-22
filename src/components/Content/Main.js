import React,  {Component, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import CardBox from './CardBox';
import styled from 'styled-components';
import NewContent from './NewContent';
import { Link } from "react-router-dom";



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
                    this.setState({
                    contents: response.data
                   
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
     
        return (
            
            <HomeContentWrapper>
                <Search position="center" searchForm={this.searchForm}/>
                <Container>
                    {
                        contents.filter(item => item.name.toLowerCase().includes(searchState)).map((contents, idx) => {
                            return <Link key={idx}  to={`/contents/${contents._id}`}> <CardBox name={contents.name} icon={contents.icon ? contents.icon : "https://res.cloudinary.com/menozzi/image/upload/v1589934560/focus/undraw_youtube_tutorial_2gn3_z6dmf6.svg"} owner={contents.owner.name ? contents.owner.name : "by Admin"} /></Link>
                            }) 
                    }
                    <NewContent getAllContents={this.getAllContents} />
                 
                </Container>
                </HomeContentWrapper>
                 

        );//closes return
  } //closes render
} //closes component

export default Main;






 
