hhhh

开始一种新的尝试

> 好早就接触这玩意，一直想研究探究，今天有时间整整

> 可能要打脸 更改基于 pnpm 实战

### 工作流

- release 分支: 主要是通过 changeset 更新版本，详情见[version.yml](https://github.com/niaogege/pnpm-test/blob/main/.github/workflows/version.yml)

- main 分支: release 分支合并到 main 分支适合，触发[release.yml](https://github.com/niaogege/pnpm-test/blob/main/.github/workflows/release.yml),主要内容是自动更新 npm 包

> 前提是本地需要先 changeset 下 变更需要发布的 package 和包的版本类型[semver](https://semver.org/lang/zh-CN/)

### changeset 版本管理

[基于 pnpm + changesets 的 monorepo 最佳实践](https://juejin.cn/post/7181409989670961207#heading-12)

- pnpm changeset 选择要发布的包
- pnpm changeset version 修改包为正式版本
- pnpm changeset publish 发布

> "version": "0.0.4",

也阔以进入 Prerelease 模式

- pnpm changeset pre enter <tag> // 进入测试版本模式
- pnpm changeset pre exit // 退出当前测试版本

### pnpm publish -r

> Run **pnpm publish -r**. This command will publish all packages that have bumped versions not yet present in the registry. 这个命令将发布所有未在注册表注册过的包

### 发布公共组织包

组织下的包默认是私有包，需要收费的，需要手动配置称公共包，在 packagea/package.json 中加入如下配置

```json
{
  "name": "packagea",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/",
    "access": "public"
  }
}
```

### 自动化更改版本

[changesets/action@v1](https://github.com/changesets/action)
[pnpm using-changesets ](https://www.pnpm.cn/using-changesets#bump-up-package-versions)

## 参考

- [为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/h7MfgVfR4c9YxtO44C-lkg)
