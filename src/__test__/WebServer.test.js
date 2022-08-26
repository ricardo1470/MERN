const request = require('supertest');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasks = require('../models/task');

describe('Task API', () => {
    test('connect to mongoose', async () => {
        await mongoose.connect('mongodb://localhost/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    })

    test('create a task', async () => {
        const task = await tasks.create({
            title: 'test',
            description: 'test',
        });

        expect(task.title).toBe('test');
        expect(task.description).toBe('test');
    })
})