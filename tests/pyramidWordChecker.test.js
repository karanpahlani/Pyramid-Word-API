const expect = require('expect');
const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('pyramid word checker', () => {
  it('can identify if a word is pyramid', async () => {
    await request
      .post('/api/pyramidWordChecker/inputString')
      .send({
        "string": "banana"
        }
        )
      .expect(response => {
        expect(response.status).toBe(200), expect(response.body).toBe(true);
      });
  });
  it('can identify if a word is not pyramid', async () => {
    await request
      .post('/api/pyramidWordChecker/inputString')
      .send({
        "string": "badana"
        }
        )
      .expect(response => {
        expect(response.status).toBe(200), expect(response.body).toBe(false);
      });
  });
  it('can identify empty input string', async () => {
    await request
      .post('/api/pyramidWordChecker/inputString')
      .send({
        "string": ""
        }
        )
      .expect(response => {
        expect(response.status).toBe(400);
      });
  });
});