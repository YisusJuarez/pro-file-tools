const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("proApi", {
    generateSongs: (song) =>ipcRenderer.send('createSong', song),
})

