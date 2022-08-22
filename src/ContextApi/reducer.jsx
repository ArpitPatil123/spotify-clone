export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "",
  // "BQAbVDelF3Ck89nm4sN3assvkiG8uJYxgZLExVt7QniPyv7e0AZPoFOgla5D1Q_YLm4BoUxJlYRIc5j-LY1X1xKPEdFbFHsF0ZTGJjX7irpcGBlji-eVVxaJEaEUC5N7xih91nSpuA7oU1rtNdl6499YRoJIcFLd_JXYHuRR9P0keXxDpuj-m5SNfl3awdWxrfYnqz9dfnhZOskg9KnA7-XebB4",
  discover_weekly: null,
  playlistId: "37i9dQZEVXcJ24mb8Qm3NY",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlistId: action.playlistId,
      };

    default:
      return state;
  }
};

export default reducer;
