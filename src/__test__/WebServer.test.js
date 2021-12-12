const request = require('supertest');
const indexRouter = require('../routes/index');

describe('GET request testing', () => {
    // test init route
    test('should return 200 OK, init route', () => {
        const response = request(indexRouter).get('/').send();
        expect(response.status);
    });

    // test /api/task route
    test('should return 200 OK, user route', () => {
        const response = request(indexRouter).get('/api/tast').send();
        expect(response.status);
    });
});