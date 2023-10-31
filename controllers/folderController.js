const fs = require('fs')

const filePath = 'db.json'
const getFolders = async (req, res) => {
    fs.readFile(filePath, 'utf-8', (e, data) => {
        if(e) {
            console.log('Error reading from the JSON file: ', err)
        } else {
            try {
                const jsonData = JSON.parse(data)
                res.send(jsonData)
            } catch (e) {
                console.log('Error parsing JSON: ', e)
            }
        }
    })
}

const createFolder = async (req, res) => {
    const data = req.body
    const jsonString = JSON.stringify(data, null, 2)

    fs.writeFile(filePath, jsonString, (e) => {
        if(e) {
            console.log('ERROR CREATING FOLDER: ', e)
            res.send('ERRROR')
        } else {
            console.log('Data has been written!')
            res.send({message: "CREATED", jsonString})
        }
    })
}

const addData = async (req, res) => {
    const newData = req.body

    fs.readFile(filePath, 'utf-8', (e, data) => {
        if(e) {
            console.log('Error reading from the JSON file:', e)
            res.send('Error reading from the JSON file')
        } else {
            try {
                const jsonData = JSON.parse(data)
                Object.assign(jsonData, newData)
                const updatedData = JSON.stringify(jsonData, null, 2)

                fs.writeFile(filePath, updatedData, e => {
                    if(e) {
                        console.log('Error writing to the JSON file:', e);
                        res.send('Error writing to the JSON file')
                    } else {
                        console.log('Data has been added to the JSON file.');
                        res.send({message: 'Data has been added to the JSON file.', updatedData})
                    }
                })
            } catch (e) {
                console.log('Error parsing JSON: ', e)
                res.send('Error parsing JSON')
            }
         }
    })
}

module.exports = {
    getFolders,
    createFolder,
    addData,
}
