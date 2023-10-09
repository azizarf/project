const blog = require("../model/blog.model");

module.exports = {
    findOne: async (req, res) => {
        try {
            const result = await blog.find({ _id: req.params.id })
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    findAll: async (req, res) => {
        try {
            const result = await blog.find({})
            res.status(201).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    create: async (req, res) => {
        try {
            const result = await blog.create(req.body)
            res.status(202).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    deleted: async (req, res) => {
        try {
            const blogId = req.params.id;
            const result = await blog.findByIdAndRemove(blogId)
            res.status(204).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    updated: async (req, res) => {
        try {
            const blogId = req.params.id;
            const updates = req.body
            const result = await blog.findByIdAndUpdate(blogId, updates)
            res.status(200).send(result)
        } catch (error) {
            throw new Error(error)
        }
    },
}