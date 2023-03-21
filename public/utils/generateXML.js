const fs = require('fs');
const path = require('path');
const os = require('os')

const generateXML = (song) => {
    fs.mkdir(os.homedir() + '\\Documents\\' + '\\ExportedSongs', { recursive: true }, (err) => {
        if (err) return console.error(err)
        const stream = fs.createWriteStream(os.homedir() + '\\Documents\\' + '\\ExportedSongs\\' + "my_file.pro6");
        
        stream.once('open', function (fd) {
            stream.write(song);
            stream.end();
        });
    })

}

exports.generateXML = generateXML