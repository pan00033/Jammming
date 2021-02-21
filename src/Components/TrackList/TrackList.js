import React from 'react';
import './TrackList.css';
import '../Track/Track';


class TrackList extends React.Component{
    render(){
        return(
            <div class="TrackList">
                <Track />
                <Track />
                <Track />
            </div>
        );
    }
}


export default TrackList;