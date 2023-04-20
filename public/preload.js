const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("proApi", {
    generateSongs: async(data) =>{
        const response = await ipcRenderer.invoke('createSong', data)
        return response
    },
})

