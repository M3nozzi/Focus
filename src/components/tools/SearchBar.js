import React, { useState} from 'react';
import {Card } from 'antd';

export function SearchBar({ onSubmit }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.handleSubmit(this.state.term);
    // }

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSubmit(searchTerm);
        }
    };

    return (
            <div className="search-bar ui segment">
            
                    <div className="field">
                        <label htmlFor="video-search">Content Search</label>
                        <input onChange={handleChange} onKeyPress={onKeyPress} name="video-search" type='text' value={searchTerm} />
                    </div>
               
            </div>
    );
    
    
}

export default SearchBar;