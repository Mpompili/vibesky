import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";



class SearchResults extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.generateResults = this.generateResults.bind(this);
    }

    componentDidMount(){
        this.generateResults();
    }

    // componentWillReceiveProps(props, nextProps){
    //     console.log('nextProps', nextProps); 
    //    if (nextProps.noSearch == false) {
    //        console.log('hello');
    //        this.generateResults(); 
    //    }
    // }

    componentDidUpdate(prevProps){
        if (prevProps.noSearch != this.props.noSearch || this.props.noSearch == false){
            console.log('plz god workkkk'); 
            this.generateResults(); 
        }
    } 


    generateResults() {
        let value = this.props.searchText;
        let results = this.props.results;
        const theList = document.getElementById("theSearchList"); 
        console.log(theList); 
        let theSongs = Object.entries(results); 
        console.log('results: ', results); 
        console.log("work plz", theSongs); 
        const highlighted = Object.entries(results).map(song => {
            const regex = new RegExp(value, 'gi');
            console.log("WHATTHEUFCK", song );
            const songName = song[1].title.replace(regex, `<span class="hl">${value}</span>`);          
            const artistName = song[1].uploader.replace(regex, `<span class="hl">${value}</span>`);
            const artistPic = song[1].imageUrl;
            console.warn('songName, artst, aPic', songName);
            return (
                `<li class="search-item">
                    <img class="lit-1" src=${artistPic}/> 
                    <span class="si-song">${songName}</span>
                    <span class="si-artist">${artistName}</span> 
                </li>`
            );
        }).join('');
        // debugger; 
        
        console.log('highleted: ', highlighted);
        theList.innerHTML = highlighted;

        //     let html = matchedArray.map(place => {
        //         const regex = new RegExp(this.value, 'gi');
        //         const cityname = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        //         const statename = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        //         return `
        // <li>
        //   <span class="name">${cityname}, ${statename}</span> 
        //   <span class="population">${place.population}</span> 
        // </li>
        // `;
        //     }).join('');
    }

    render() {
        let hideResults; 
        if (this.props.noSearch) {
            hideResults = "visibility: 'hidden'";
        } else {
            hideResults = "";
        }
        
        // return (<div style={{ visibility: "hidden" }}></div>);
        
        return (
            <div className="search-results" style={{hideResults}} >
                <ul id="theSearchList" className="searchList">
                    {/* <li className="li-table">
                        <span className="lit-1"></span>
                        <span className="si-song si-song-h">Song</span>
                        <span className="si-artist si-arist-h">Artist</span>
                    </li> */}
                    {/* {results} */}
                </ul>
            </div>

        );
    }
}
export default SearchResults; 