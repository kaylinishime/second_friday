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
		models.user.findOne({ where: {email: email}}).then(function (user, err) {
			if (err) {
				res.json({err: err, success: false})
				return false
			}
			if (user) {
				res.json({ error: "User already exists" })
				return false
			}

			// Need to create a new user
			bcrypt.hash(password, 10, function (err, hash) {
				if (err) {
					res.json(err)
					return false
				}
				var newuser = models.user.build({
					email: email,
					password: hash
				});
				newuser.save().then(function(createdUser, err) {
					var token = createToken(createdUser.dataValues);
					if (err) {
						res.json(err)
						return false
					}
					// Everything worked, send back a token
					res.json({ token: token })
				})
			});
		})
	}


function login (req, res, next) {
		var email = req.body.email
		var password = req.body.password

		if (!email || !password) {
			res.json({ error: "Username and password must be set" })

			return false
		}

		// Verify that username exists in database
		models.user.findOne({ where: {email: email}}).then(function (user, err) {
			if (err) {
				res.json(err)
				return false
				}
			if (!user) {
				res.json({ error: "User does not exist" })
				return false
				}


				// Verify password
		bcrypt.compare(password, user.password, function (err, verified) {
			console.log(verified)
				console.log(err)
				if (err) {
					res.json(err)
					return false
				}
				if (verified) {
					res.json({ token: createToken(user.dataValues) })
				}
				else {
					res.json({ error: "Password is incorrect" })
				}
			})
		});
		}

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


module.exports = {
	register: register,
	createToken, createToken,
	verifyToken: verifyToken,
	login: login
}
