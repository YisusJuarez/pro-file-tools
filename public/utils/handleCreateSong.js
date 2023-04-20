const { generateXML } = require("./generateXML");
const { createPlaylist } = require('./createPlaylist');

async function handleCreateSong(data) {

  const formatSong = data.song.trim().split("\n").map((verse) => verse.trim())
  if (formatSong.length > 0) {
    const playlistWithSong = createPlaylist(formatSong)
    const xml = await generateXML(playlistWithSong, data.name)
    console.log("XML-----", xml)
    const promise = new Promise((resolve, reject) => {
      if (xml?.isSaved) {
        resolve({ status: 200, message: "Saved Successfully" })
      } else {
        resolve({ status: 500, message: "Error creating file" })
      }
    });
    return promise
  }

}

exports.handleCreateSong = handleCreateSong;