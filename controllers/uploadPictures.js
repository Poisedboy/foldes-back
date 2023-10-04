
const uploadPicutre = async (req, res) => {
    try {
        if(!req.files.file) {
            res.status(422).send('Upload picture!')
        }
        const file = req.files.file
        console.log(picture)
        console.log("FILES ---> ", file)
        res.status(200).send('Picture\`s uploaded!');
    } catch (e) {
        console.log(e)
        res.status(400).send('Bad request!')
    }
}

module.exports = {
    uploadPicutre,
}