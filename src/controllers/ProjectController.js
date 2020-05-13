const express = require('express')
const Project = require('./../models/Project')

const router = express.Router()

router.get('/all', async (req, res) => {
	try {
		const projects = await Project.find({})
		return res.send({ projects })
	}
	catch (err) {
		return res.status(500).send({ error: "Request failed" })
	}
})

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