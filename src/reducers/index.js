import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "Comfortably Numb", duration: "6:24" },
    { title: "In the Flesh", duration: "4:16" },
    { title: "Hey You", duration: "4:40" },
    { title: "Vera", duration: "1:29" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
