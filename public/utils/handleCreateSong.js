const { generateXML } = require("./generateXML");
const { createPlaylist } = require('./createPlaylist');
function handleCreateSong(e, data) {

  const formatSong = data.song.trim().split("\n").map((verse) => verse.trim())
  if (formatSong.length > 0) {
    const playlistWithSong = createPlaylist(formatSong)
    generateXML(playlistWithSong, data.name)
  }
}

exports.handleCreateSong = handleCreateSong;