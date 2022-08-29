'use strict';

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', async () => {
    await app.httpRequest().get('/user').expect(200)
      .expect('user');
  });

  it('user list', async () => {
    await app
      .httpRequest()
      .get('/user/list')
      .expect(200)
      .expect("[{name: 'abc'}]");
  });
  it('user detail', async () => {
    await app
      .httpRequest()
      .get('/user/detail?id=123')
      .expect(200)
      .expect('123');
  });

  it('post user add', async () => {
    await app
      .httpRequest()
      .post('/user/add')
      .send({ name: 'jhon' })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'jhon',
        },
      });
  });
});
