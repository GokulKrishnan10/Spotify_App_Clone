const mongoose = require("mongoose");
const playlist_schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  songs: { type: Array },
});
module.exports = mongoose.model("Playlist", playlist_schema);
