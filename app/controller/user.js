'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('user.html', {
      id: 100,
    });
  }

  async list() {
    const { ctx } = this;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    ctx.body = "[{name: 'abc'}]";
  }

  async detail() {
    const { ctx } = this;
    await ctx.service.user.detail(ctx.query.id);
    ctx.body = ctx.query.id;
  }

  async add() {
    const { ctx } = this;
    // console.log(ctx.request.body);
    const rules = {
      name: { type: 'string' },
    };
    ctx.validate(rules);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async del() {
    const { ctx } = this;
    ctx.body = ctx.request.body.name;
  }
}

module.exports = UserController;
