import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import SearchResults from "./search_results_container";

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
    }



    updateSearch(e) {
        console.log("this is e: ", e); 
        this.setState({searchText: e.target.value }, () => {
            this.getResults(); 
        });
    }

    

    getResults() {
        let keys = this.props.keys;
        let tracks = this.props.tracks; 

        let results = {}; 
        let noSearch = true; 
        //   let matches = this.props.tracks.filter(track => {
        let regex = new RegExp(this.state.searchText, 'gi');

        keys.forEach(function(key) {
            if (tracks.hasOwnProperty(key) && (tracks[key].title.match(regex)) || tracks[key].uploader.match(regex)) {
                results[key] = tracks[key]; 
                noSearch = false; 
            }
        });

        console.log('what is happening right hurr:', results, noSearch);

        this.setState({searchResults: {noSearch: noSearch, results: results}}, () => {
            console.log("changed state: ", this.state.searchResults);
        });
        // let matches = this.props.tracks.filter(track => {
        //     let regex = new RegExp(this.state.searchText, 'gi');
        //     return track.title.match(regex) || track.uploader.match(regex);
        // });
      


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
export default Search; 


