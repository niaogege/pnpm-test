hhhh

开始一种新的尝试

> 好早就接触这玩意，一直想研究探究，今天有时间整整

> 可能要打脸 更改基于 pnpm 实战

### changeset 版本管理

[基于 pnpm + changesets 的 monorepo 最佳实践](https://juejin.cn/post/7181409989670961207#heading-12)

- pnpm changeset 选择要发布的包
- pnpm changeset version 修改包为正式版本
- pnpm changeset publish 发布

> "version": "0.0.4",

也阔以进入 Prerelease 模式

- pnpm changeset pre enter <tag> // 进入测试版本模式
- pnpm changeset pre exit // 退出当前测试版本

### workspace 配置

在需要 monorepo 项目配置**pnpm-workspace.yaml**

**pnpm-workspace.yaml** 定义了 工作空间 的根目录，并能够使您从工作空间中包含 / 排除目录 。 默认情况下，包含所有子目录。

例如：

```json
// pnpm-workspace.yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'

```

### package 指定 packageManager 配置

```json
"packageManager": "pnpm@6.30.0"
```

### pnpm publish -r

Run **pnpm publish -r**. This command will publish all packages that have bumped versions not yet present in the registry.

### 禁止依赖提升

默认情况下 PNPM 安装的依赖也是会被提升的。如果，需要 PNPM 禁止依赖提升，我们可以通过在 Monorepo 项目工作区下的 .npmrc 文件中 配置[10]，例如只提升 lodash：

```json
// .npmrc
hoist-pattern[]=*lodash*
```

### 使用 commitizen 规范 commit 提交格式

commitizen 的作用主要是为了生成标准化的 commit message，符合 Angular 规范。
一个标准化的 commit message 应该包含三个部分：Header、Body 和 Footer，其中的 Header 是必须的，Body 和 Footer 可以选填。

项目需要安装

```js
pnpm install -wD commitizen cz-conventional-changelog
```

然后工程需要修改 2 处配置

```json
// package.json

"script": {
  "commit": "cz"
}
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
},
```

后面就能用*pnpm commit*代替*git commit*进行代码提交

### commitlint && husky

对提交行为进行约束

前面我们提到，通过 **commitizen** && **cz-conventional-changelog** 可以规范我们的 commit message，但是同时也存在一个问题，如果用户不通过 pnpm commit 来提交代码，而是直接通过 git commit 命令来提交代码，就能绕开 commit message 检查，这是我们不希望看到的。
因此接下来我们使用 commitlint 结合 husky 来对我们的提交行为进行约束。在 git commit 提交之前使用 git 钩子来验证信息，阻止不符合规范的 commit 提交。

安装 commitlint 和 husky

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

### .npmrc 文件有啥作用

.npmrc，可以理解成 **npm running cnfiguration**, 即 npm 运行时配置文件。简单点说， .npmrc 可以设置 package.json 中依赖包的安装来源，既从哪里下载依赖包

```js
// .npmrc
hoist-pattern[]=*lodash*
strict-peer-dependencies=false
```

## 参考

- [为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/h7MfgVfR4c9YxtO44C-lkg)
