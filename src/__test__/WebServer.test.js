const request = require('supertest');
const indexRouter = require('../routes/index');
//import {describe, expect, test} from '@jest/globals';

describe('GET request testing', () => {
    // test init route
    test('should return 200 OK, init route', () => {
        const response = request(indexRouter).get('/api').send();
        expect(response.status).toBe(200);
    });

    // test /api/task route
    //test('should return 200 OK, user route', () => {
    //    const response = request(indexRouter).get('/api/tast').send();
    //    expect(response.status);
    //});
});