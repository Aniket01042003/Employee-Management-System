const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');


exports.getAll = async (req, res, next) => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 });
        res.status(200).json({ employees });
    } catch (err) {
        next(err);
    }
};


exports.getById = async (req, res, next) => {
    try {
        const emp = await Employee.findById(req.params.id);
        if (!emp) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ employee: emp });
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


        const { name, email, position } = req.body;
        if(!name || !email || !position) {
            return res.status(400).json({ message: 'Name, email, and position are required' });
        }

        const existing = await Employee.findOne({ email });

        if (existing) return res.status(400).json({ message: 'Email already exists' });


        const newEmp = await Employee.create({ name, email, position });
        res.status(201).json({ employee: newEmp });
    } catch (err) {
        next(err);
    }
};


exports.update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


        const { name, email, position } = req.body;
        if(!name || !email || !position) {
            return res.status(400).json({ message: 'Name, email, and position are required' });
        }
        
        const emp = await Employee.findById(req.params.id);
        if (!emp) return res.status(404).json({ message: 'Employee not found' });
        

        if (name) emp.name = name;
        if (email) emp.email = email;
        if (position) emp.position = position;


        await emp.save();
        res.status(200).json({ employee: emp });
    } catch (err) {
        next(err);
    }
};


exports.remove = async (req, res, next) => {
    try {
        const emp = await Employee.findById(req.params.id);
        if (!emp) return res.status(404).json({ message: 'Employee not found' });

        await emp.deleteOne();
        res.status(200).json({ message: 'Employee deleted' });
    } catch (err) {
        next(err);
    }
};