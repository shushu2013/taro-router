## Taro 一些问题
测试项目使用的是 Taro v3.6.13

## 1、无法导入使用 @tarojs/router

### 复现步骤
```
$ git clone https://github.com/shushu2013/taro-router-test.git

$ cd taro-router-test

$ pnpm install

$ pnpm dev:h5
```

## 2、h5 自定义路由，直接访问原始路径，页面白屏

### 复现步骤
```
$ git clone https://github.com/shushu2013/taro-router-test.git

$ cd taro-router-test

// 需要在分支 h5-customRoutes 中测试
$ git checkout h5-customRoutes

$ pnpm install

$ pnpm dev:h5
```
