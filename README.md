hhhh


开始一种新的尝试


> 好早就接触这玩意，一直想研究探究，今天有时间整整

> 可能要打脸 更改基于 pnpm 实战



### workspace配置
在需要monorepo项目配置**pnpm-workspace.yaml**

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

### package指定packageManager配置

```json
"packageManager": "pnpm@6.30.0"
```
### 禁止依赖提升

默认情况下 PNPM 安装的依赖也是会被提升的。如果，需要 PNPM 禁止依赖提升，我们可以通过在 Monorepo 项目工作区下的 .npmrc 文件中 配置[10]，例如只提升 lodash：
```json
// .npmrc
hoist-pattern[]=*lodash*
```

### 实战走起


## 参考
- [为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/h7MfgVfR4c9YxtO44C-lkg)
