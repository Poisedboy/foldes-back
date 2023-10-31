const { v4: uuidv4 } = require('uuid');

const pictures = []

const getPicutres = async (req, res) => {
    res.send(pictures)
}

const uploadPicutre = async (req, res) => {
    try {
        if(!req.files.file) {
            res.status(422).send('Upload picture!')
        }
        const file = req.files.file

        const newPicture = {
            id: uuidv4(),
            picture: file,
        }
        pictures.push(newPicture)
        console.log("FILE ---> ", pictures)
        res.status(200).json(file);
    } catch (e) {
        console.log(e)
        res.status(400).send('Bad request!')
    }
}

module.exports = {
    uploadPicutre,
    getPicutres
}