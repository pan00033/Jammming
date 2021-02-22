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
        
    }
};



export default Spotify;