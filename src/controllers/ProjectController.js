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

router.get('/id/:id', async (req, res) => {
	const project = await Project.findById(req.params.id, (err, project) => {
		if (err) {
			return res.status(500).send({ error: "Project not found" })
		}
		else {
			return res.send({project})
		}
	})
})

router.get('/name/:name', async (req, res) => {
	const project = await Project.findOne({ name: req.params.name }, (err, project) => {
		if (err) {
			return res.status(500).send({ error: "Project not found" })
		}
		else {
			return res.send({ project })
		}
	})
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