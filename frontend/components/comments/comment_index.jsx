import React from 'react'; 

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { track } = this.props; 
        if (this.props.comments === {}) return(<li>loading</li>);
        console.log(this.props.comments);
        
        let trackComments = track.commentIds.map(id => (
            <li>{this.props.comments[id].body}</li> 
        ));

        return(
            <ul>
            {trackComments}
            </ul>
        );
    }

}

export default CommentIndex; 