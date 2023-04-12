export const setselect = (select) => ({
  type: "set-name",
  payload: select,
});
export const addPlaylist = (playlist) => ({
  type: "add-playlist",
  payload: playlist,
});
export const updateIndex = (updated) => ({
  type: "update-index",
  payload: updated,
});
export const setEdit = (edit) => ({
  type: "set-edit",
  payload: edit,
});
