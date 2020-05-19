import React, {useState} from 'react';
import styled from 'styled-components';
// import queryString from "query-string";

const Wrapper = styled.div`
  margin: 2rem auto;
  @media screen and (min-width: 768px) {
    max-width: 31.25rem;
    margin: 4rem
      ${(props) =>
        props.position === "center"
          ? "auto"
          : "0"};
  }
`;

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    background: ${props => props.results ? "none" : "#f5f5f5"};
    height: 2.8rem;
    outline: none;
    border: none;
    border-bottom: ${props => props.results ? "2px solid #464646" : "0"}; 
    border-radius: ${props => props.results ? "0" : "1.625rem"};
    padding: ${props => props.results ? "0 3.5rem 0 0" : "0 3.5rem 0 1.5rem"};
   
`;

const Button = styled.button`
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    background-image: url(${
        props => props.url === "/" ? require("../../images/error/magnifying-glass.svg") : require("../../images/error/close.svg")});
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;


const Title = styled.h2`
    font-size: 0.625rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: +1.3px;
    margin-bottom: 1rem;
`;


class Search extends React.Component {
  
    constructor(props) {
    super(props);
      
    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {

    let { name, value } = e.target; 
   
    this.setState({
        [name]:value,
    });

    this.props.searchForm(value);
  }
  
  render() {
    return (
        <Wrapper position={this.props.position}>

            <Bar>
                <Input 
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleChange} 
                />
            </Bar>

            {/* <div>
                <form className="Search" onSubmit={e => e.preventDefault()}>
                <input type="text" className="Search-box" placeholder="Filter names" onChange={this.handleChange}/>
                </form>
            </div> */}
      </Wrapper>
    );
  }
}

export default Search;

