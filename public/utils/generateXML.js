const fs = require('fs');
const path = require('path');
const os = require('os')

const generateXML = (song, name) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(os.homedir() + '\\Documents\\' + '\\ExportedSongs', { recursive: true }, (err) => {
            if (err) return false
            const stream = fs.createWriteStream(os.homedir() + '\\Documents\\' + '\\ExportedSongs\\' + name + ".pro6");

            stream.once('open', function (fd) {
                stream.write(song);
                stream.end();
            });


            stream.on("finish", function () {
                return resolve({ isSaved: true })
            })

            stream.on("error", function (err) {
                return resolve({ isSaved: false });
            })

        })
    })



}

exports.generateXML = generateXML