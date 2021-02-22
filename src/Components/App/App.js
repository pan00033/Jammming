import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchResults: [{name:'reputation',artist:'reputation',album:'reputation',id:'23'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'32'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'46'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'99'}],
    playlistName:'Changes',playlistTracks:[{name:'intention',artist:'Justin',album:'Changes',id:'1'},
    {name:'intention',artist:'Justin',album:'Changes',id:'2'}]};

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term){
    Spotify.search(term);
  }

  savePlaylist(){
    //an array of uri values.
    const trackURIs = this.state.playlistTracks;
    return trackURIs;
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack =>{
      return savedTrack.id === track.id
    })){
      return;
    }
    else{
      const newPlayListTracks = this.state.playlistTracks;
      newPlayListTracks.push(track);
      this.setState({playlistTracks:newPlayListTracks});
    }
  }


  removeTrack(track){
    const newTrackList = this.state.playlistTracks.filter(savedTrack=>{
      return savedTrack.id !== track.id;
    });
    this.setState({playlistTracks : newTrackList});
  }

  updatePlaylistName(name){
    this.setState({playlistName:name});
  }

  render(){
    return(
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
