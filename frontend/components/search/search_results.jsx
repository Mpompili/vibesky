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

    componentDidUpdate(prevProps){
        if (prevProps.noSearch != this.props.noSearch || this.props.noSearch == false){
            this.generateResults(); 
        }
    } 

    generateResults() {
        let value = this.props.searchText;
        let text = this.props.searchText;

        text = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");


        let results = this.props.results;
        const theList = document.getElementById("theSearchList"); 

        const highlighted = Object.entries(results).map(song => {


            const regex = new RegExp(text, 'gi');
            const songName = song[1].title.replace(regex, `<span class="hl">${value}</span>`);          
            const artistName = song[1].uploader.replace(regex, `<span class="hl">${value}</span>`);

            const artistPic = song[1].imageUrl; 
            const songId = song[1].uploaderId; 
            return (
                `
                    <li class="search-item" sid=${songId} >
                        <img class="lit-1" src=${artistPic}/> 
                        <span class="si-song">${songName}</span>
                        <span class="si-artist">${artistName}</span> 
                    </li>
              `
            );
        }).join('');
        
        theList.innerHTML = highlighted;
        this.sendToUser(); 
    }

    sendToUser() {
        const finalResults = document.querySelectorAll(".search-item");
        finalResults.forEach(node => {
            node.addEventListener("click", () => {
                let sID = node.getAttribute("sid");
                this.props.history.push(`/users/${sID}`);
            });
        });
    }

    render() {
        let classProxy; 
        if (this.props.noSearch || this.props.searchText == '') {
            classProxy = "search-results hideforever";
        } else {            
            classProxy = "search-results";
        }
        
        return (
            <div className="searchList">
                 <ul id="theSearchList" className={classProxy}>
                </ul>
            </div>

        );
    }
}
export default withRouter(SearchResults); 