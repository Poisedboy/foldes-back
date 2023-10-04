
const uploadPicutre = async (req, res) => {
    try {
        // if(!req.body) {
        //     res.status(422).send('Upload picture!')
        // }
        const picture = req.body;
        console.log(picture)
        res.status(200).send('Picture\`s uploaded!');
    } catch (e) {
        console.log(e)
        res.status(400).send('Bad request!')
    }
}

const uploadPicutres = (req, res) => {
    res.send('Upload photos');
}

module.exports = {
    uploadPicutre,
    uploadPicutres
}