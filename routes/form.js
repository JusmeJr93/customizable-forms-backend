import express from 'express';
import Form from '../models/form.js';
import Template from '../models/template.js';

const router = express.Router();

//create a new form
router.post('/templates/:templateId/forms', async (req, res) => {
    try {
        const template = await Template.findByPk(req.params.templateId);
        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }
        const form = await Form.create({
            ...req.body,
            templateId: req.params.templateId,
        });
        res.status(201).json(form);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create form' });
    }
});

// get all forms for a template
router.get('/templates/:templateId/forms', async (req, res) => {
    try {
        const forms = await Form.findAll({
            where: { templateId: req.params.templateId },
        });
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch forms' });
    }
});


//get a form by id
router.get('/forms/:id', async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id, {
            include: [Template],
        });
        if (form) {
            res.json(form);
        } else {
            res.status(404).json({ error: 'Form not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch form' });
    }
});

//update a form
router.put('/forms/:id', async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id);
        if (form) {
            await form.update(req.body);
            res.json(form);
        } else {
            res.status(404).json({ error: 'Form not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update form' });
    }
});

//delete a form
router.delete('/forms/:id', async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id);
        if (form) {
            await form.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Form not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete form' });
    }
});

export default router;