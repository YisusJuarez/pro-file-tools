const {generateXML} = require("./generateXML");
const { createPlaylist } = require('./createPlaylist');
function handleCreateSong(event, song) {
    const formatSong = song.trim().split("\n").map((verse)=> verse.trim())
    if(formatSong.length > 0){
      const playlistWithSong = createPlaylist()
      generateXML(playlistWithSong)
    }
}

exports.handleCreateSong = handleCreateSong;