const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        try {
            
            db.Genre.findAll()
                .then(genres => {
                    return res.json({
                        meta: {
                            status : 200,
                            total : genres.length,
                            url : "api/genres"
                        },
                        data : genres
                    })
                })
        } catch (error) {
            console.log(error);
            throw {
                status: 500,
                message: error.message
            }
        }
        
    },
    'detail': (req, res) => {

        try {
            db.Genre.findByPk(req.params.id)
                .then(genre => {
                    res.json({
                        meta: {
                            status : 200,
                            url : "api/genres"
                        },
                        data : {
                            genre
                        }
                    });
                });
            
        } catch (error) {
            console.log(error);
            throw {
                status: 500,
                message: error.message
            }
        }
    }

}

module.exports = genresController;