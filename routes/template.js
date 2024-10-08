import express from 'express';
import Template from '../models/template.js';
import Question from '../models/question.js';

const router = express.Router();

//create new template
router.post('/templates', async (req, res) => {
    console.log(req.body);

    const { title, description, tags, image, access } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const template = await Template.create({ title, description, tags, image, access });
        res.status(201).json(template);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create template' });
    }
});

//get all templates
router.get('/templates', async (req, res) => {
    try {
        const templates = await Template.findAll();
        res.json(templates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch templates' });
    }
});

//get a template
router.get('/templates/:id', async (req, res) => {
    try {
        const template = await Template.findByPk(req.params.id, { include: [Question] });
        if (template) {
            res.json(template);
        } else {
            res.status(404).json({ error: 'Template not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch template' });
    }
});

//update a template
router.put('/templates/:id', async (req, res) => {
    try {
        const template = await Template.findByPk(req.params.id);
        if (template) {
            await template.update(req.body);
            res.json(template);
        } else {
            res.status(404).json({ error: 'Template not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update template' });
    }
});

//delete a template
router.delete('/templates/:id', async (req, res) => {
    try {
        const template = await Template.findByPk(req.params.id);
        if (template) {
            await template.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Template not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete template' });
    }
});

export default router;