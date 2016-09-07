var models = require('../models/index')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var sequelize = require('sequelize')


function register (req, res, next) {
	var email = req.body.email
	var password = req.body.password

		if (!email || !password) {
			res.json({ error: "Username and password must be set" })
			return false
		}
		// Verify that the username has not been taken
		models.user.findOne({ where: {email: email}}).then(function (err, user) {
			if (err) {
				res.json(err)
				return false
			}
			if (user) {
				res.json({ error: "User already exists" })
				return false
			}
		});


			// Need to create a new user
			bcrypt.hash(password, 10, function (err, hash) {
				if (err) {
					res.json(err)
					return false
				}
				var user = new User({
					username: username,
					password_hash: hash
				})
				user.save(function (err, user) {
					if (err) {
						res.json(err)
						return false
					}
					// Everything worked, send back a token
					res.json({ token: createToken(user) })
				})
			})



	function createToken (user) {
		return jwt.sign(user, process.env.JWT_SECRET)
	}

	function verifyToken (req, res, next) {
		jwt.verify(req.query.token, process.env.JWT_SECRET, function (err, decoded) {
			if (err) {
				res.json(err)
				return false
			}
			req.token = decoded
			next()
		})
	}
}

module.exports = {
	register: register,
	verifyToken: verifyToken
}
