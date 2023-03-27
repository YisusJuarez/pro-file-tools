const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("proApi", {
    generateSongs: (data) =>ipcRenderer.send('createSong', data),
})

