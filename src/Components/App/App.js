import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchResults: [{name:'reputation',artist:'reputation',album:'reputation',id:'1'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'1'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'1'},
    {name:'reputation',artist:'reputation',album:'reputation',id:'1'}],
    playlistName:'Changes',playlistTracks:[{name:'intention',artist:'Justin',album:'Changes',id:'1'},
    {name:'intention',artist:'Justin',album:'Changes',id:'1'}]};
  }

  

  render(){
    return(
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
