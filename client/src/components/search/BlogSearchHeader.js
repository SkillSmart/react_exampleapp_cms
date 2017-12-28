/**This Searchbar enables the calling parent to pass a list of to be filtered Documents
 * and let the searchbar handle the filtering. 
 * The Searchbar will export a filtered list of Documents back to the parent, where they can 
 * be used to display in any fashion necessary. 
 * 
 * This decouples the positioning of the searchbar from the display of the resulting Documents.
 * At this point, i was avoiding to use Redux to stor
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';

import FilterTextInput from './FilterTextInput';

// Used to reset the form on submission
const initialState = {
    // SearchForm Values
    searchText: '',
    startDate: '',
    endDate: '',
    sources: [],
    // Doc collections
    results: [],
    filteredDocs: []
}

class BlogSearchHeader extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }
    

    onSearch = (e) => {
        e.preventDefault();
        console.log(this.state)
        // Check for cached results
        // const cachedResults = localStorage.getItem('results');
        // if (cachedResults) {
        //     this.setState({ results: cachedResults });
        //     this.props.callBack()
        // }
        // Return the filtered list of documents to the parent scope
    }

    onInputChange = (e) => {
        // Handle specific cases based on form input type
        switch (e.target.type) {
            // Enable to use multiple selections
            case "select-multiple":
                let selections = [...e.target.options].filter( opt => opt.selected).map(o => o.value);
                this.setState({
                    [e.target.name]: selections
                })
                return;
            // Used for single input values
            default:
                this.setState({
                    [e.target.name]: e.target.value
                })
        }
    }


    render() {
        return (
            <div>
                Set filters
                <form onSubmit={this.onSearch}>

                    <div>
                        Filters:
                        <div>
                            <label>Age</label>
                            <div>
                                <label htmlFor='startDate'>From</label>
                                <input type="text" name="startDate" onChange={this.onInputChange} value={this.state.startDate} />
                            </div>
                            <div>
                                <label htmlFor='endDate'>To</label>
                                <input type="text" name="endDate" onChange={this.onInputChange} value={this.state.endDate} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Sources</label>
                        <select name="sources" multiple={true} onChange={this.onInputChange}>
                            <option>Hacker News</option>
                            <option>Blogger</option>
                            <option>Medium</option>
                            <option>TechCrunch</option>
                        </select>
                    </div>
                    <div>
                        <FilterTextInput
                            type="text"
                            name="searchText"
                            onChange={this.onInputChange}
                        />
                        <button>Search</button>
                    </div>
                </form>
                <button onClick={()=>this.setState({...initialState})}>Reset Filters</button>

            </div>
        )
    }
}

BlogSearchHeader.propTypes = {
    docs: PropTypes.arrayOf(PropTypes.object),
    callBack: PropTypes.func,

}


BlogSearchHeader.defaultProps = {
    unfilteredDocs: [],
    callBack: () => null,
}

export default BlogSearchHeader