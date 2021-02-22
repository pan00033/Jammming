let token = '';
const clientId = '';
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

const Spotify = {
    getAccessToken(){
        if(token){
            return token;
        }
        
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            token = accessTokenMatch;
            const expiration = expiresInMatch;
            window.setTimeout(() => accessToken = '', expiration * 1000);
            window.history.pushState('Access Token', null, '/');
            return token;
        }
        else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
        
    },
    search(term){
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{headers:{
            Authorization: `Bearer ${token}`
        }}).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if(!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
              }));
        })
    }

};



export default Spotify;