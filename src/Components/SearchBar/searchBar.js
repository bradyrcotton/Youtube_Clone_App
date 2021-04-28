import React, {Component} from 'react';
import './searchBar.css'


class SearchBar extends Component {
    constructor(props) {
    super(props);
    this.state = {
        searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}




handleChange(event) {
    this.setState ({value: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    const search = {
        searchValue: this.state.searchValue
  
    }


this.props.searchQuery(search);
this.setState({
        searchValue: ''
    });
}
render() {
    return(
        <div>
            <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="searchbar">
                        <input type="text" placeholder="Search" value={this.state.searchValue} onChange={this.handleChange}></input>
                        <div>  
                            <input type="submit" value="Search" /> 
                        </div>    
                    </div>
                </form>
        </div>
        
        );
}     

}
export default SearchBar;