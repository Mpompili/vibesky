import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import SearchResults from "./search_results_container";
// import { browserHistory } from "react-router"; 

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: {noSearch: true, results: ''}
        };
        this.updateSearch = this.updateSearch.bind(this); 
        this.getResults = this.getResults.bind(this); 
    }

    componentDidMount(){
        this.props.fetchTracks();
        this.props.history.listen((location, action) => {
            this.setState({searchText: ''}); 
        });
    }

    // componentDidUpdate



    updateSearch(e) {
        this.setState({searchText: e.target.value }, () => {
            this.getResults(); 
        });
    }

    

    getResults() {
        let keys = this.props.keys;
        let tracks = this.props.tracks; 
        let results = {}; 
        let noSearch = true; 
        let text = this.state.searchText;

        text = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        let regex = new RegExp(text, "gi");

        keys.forEach(function(key) {
            if (tracks.hasOwnProperty(key) && (tracks[key].title.match(regex)) || tracks[key].uploader.match(regex)) {
                results[key] = tracks[key]; 
                noSearch = false; 
            }
        });
        this.setState({searchResults: {noSearch: noSearch, results: results}});
    }

    render(){
        return (
            <div className="search-bar" >
                <input id="search" type="search" onChange={e => this.updateSearch(e)} value={this.state.searchText} placeholder="Search..."/> 
                <div className="search-icon"></div> 
                <SearchResults noSearch={this.state.searchResults.noSearch} searchText={this.state.searchText} results={this.state.searchResults.results}/> 
            </div>

        );
    }
}
export default withRouter(Search); 


