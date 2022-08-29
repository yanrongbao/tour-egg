'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('service user test', () => {
  it('test detail', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail('123');
    console.log(user);
    assert(user);
    assert(user.id === '123');
  });
});
