import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import SearchResults from "./search_results";  
import { fetchTracks } from "../../util/track_api_util"; 



class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
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
        let values = this.props.values; 
        let tracks = this.props.tracks; 


        let songResult = {}; 
        let artistResult = {};

        //   let matches = this.props.tracks.filter(track => {
        let regex = new RegExp(this.state.searchText, 'gi');

        keys.forEach(function(key) {
            if (tracks.hasOwnProperty(key) && tracks[key].title.match(regex))  {
                songResult[key] = tracks[key]; 
            } else if (tracks.hasOwnProperty(key) && tracks[key].uploader.match(regex)){
                artistResult[key] = tracks[key]; 
            }
        });

        console.log("this is songResult: ", songResult);
        console.log("this is artistResult: ", artistResult);

        // let matches = this.props.tracks.filter(track => {
        //     let regex = new RegExp(this.state.searchText, 'gi');
        //     return track.title.match(regex) || track.uploader.match(regex);
        // });
      


    }

    render(){
        return (
            <div className="search_bar">
                <input className="search" type="search" onChange={e => this.updateSearch(e)} value={this.state.searchText} placeholder="Search..." />                    
            </div>
        );
    }
}
export default Search; 