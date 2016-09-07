var models = require('../models/index')

function user (req, res, next) {
	console.log(req.token)
	models.user.findOne({ email: req.token._doc.email}, function (err, user) {
		if (err) {
			res.json(err)
			return false
		}
		res.json(user)
	})
}

module.exports = {
	user: user
}
