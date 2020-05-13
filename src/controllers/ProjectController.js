const express = require('express')
const Project = require('./../models/Project')

const router = express.Router()

router.post('/register', async (req, res) => {
	try {
		const project = await Project.create(req.body)
		return res.send({ project })
	} 
	catch (err) {
		return res.status(500).send({ error: "Registration fail" })
	}
})

module.exports = app => app.use('/project', router)