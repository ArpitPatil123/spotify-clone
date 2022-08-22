import "./App.css";
import Login from "./Components/Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./API/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./ContextApi/Datalayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ token, playlistId }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // console.log(user)
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlist,
        });
        console.log(playlist);
      });

      spotify.getPlaylist(playlistId).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        // console.log(response)
      });

      spotify.searchTracks('Love').then((track) => {
        console.log(track)
      })

      spotify.getNewReleases().then((new_release) => {
        console.log(new_release)
      })

      spotify.getMyTopTracks().then((top_tracks) => {
        console.log("Top tracks are", top_tracks)
      })

    }
    // console.log("Token is = ", _token);
  }, []);

  // console.log("The token is ", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
