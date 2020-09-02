这是一个基于 eggular 的后台模板，默认使用了如下依赖：

```js
{
    "cls-hooked": "^4.2.2",
    "egg": "^2.15.1",
    "egg-redis": "^2.4.0",
    "egg-scripts": "^2.11.0",
    "egg-sequelize-autotrx": "^1.0.0",
    "egg-sequelize-module": "^0.0.3",
    "eggular": "^0.0.6",
    "mysql2": "^2.1.0",
    "sequelize": "^5.22.0"
},
```

这个模板的特点：

1. 支持模块化 module
2. 支持 sequelize 的自动事务

### eggular

eggular 的一个特性就是支持 module，一个 module 可以定义 controller/model/service

### auto transaction

通过 cls-hooked, egg-sequelize-autotrx 完成事务的自动传播，写法上要求使用 `async/await` 且使用 `transaction()` 函数：

```js
await this.ctx.model.transaction(async () => {
  await this.ctx.model.User.create(user)
  await this.ctx.model.Project.create(project)
})
```

### egg-sequelize-module

egg-sequelize 的代替者，因为在 eggular 中需要可以自动加载不同 modules 中的 model，所以对 egg-sequelize 进行改造得到 egg-sequelize-module。

使用上和 egg-sequelize 基本一致，只是 config 时的 key 为 sequelizeModule:

```js
config.sequelizeModule = {
  // ....
}
```