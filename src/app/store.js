import { configureStore } from "@reduxjs/toolkit";
const initialValue = {
  select: "User",
  playlists: [],
  edit: "",
  change: "User",
};
function storeReduce(state = initialValue, actions) {
  switch (actions.type) {
    case "set-name": {
      return { ...state, select: actions.payload };
    }
    case "add-playlist": {
      return { ...state, playlists: state.playlists.concat(actions.payload) };
    }
    case "set-edit": {
      return { ...state, edit: actions.payload };
    }
    case "set-change": {
      return { ...state, change: actions.payload };
    }
    case "update-index": {
      const { index, newValue } = actions.payload;
      return {
        ...state,
        playlists: state.playlists.map((value, i) =>
          i === index ? newValue : value
        ),
      };
    }
    default: {
      return state;
    }
  }
}
const store = configureStore({
  reducer: storeReduce,
});
export default store;
