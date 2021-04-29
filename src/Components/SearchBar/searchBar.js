import React, {Component} from 'react';
import './searchBar.css'

class SearchBar extends Component  {
    constructor(props) {
        super(props);
        this.state = {input: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const video = {
            input: this.state.input, 
        }
        this.props.searchQuery(video);
        this.setState({
            input: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )}     
    }


export default SearchBar;