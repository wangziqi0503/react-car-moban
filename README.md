![](./static/react.jpg)

# 基于React的项目初始化代码

### 项目核心依赖
axios  
immutable  
redux-immutable  
react-loadable  
redux-thunk  
styled-components  
customize-cra  
react-app-rewired  



### 项目初始化
```js
yarn install
npm start
```

### 扩展creat-react-app webpack配置

1.不推荐使用react-scripts eject 进行webpack文件进行扩展

2.使用customize-cra和react-app-rewired来进行webpack的覆盖式修改


### 扩展demo，添加dllplugin实现库类代码抽离打包

```js
const path = require('path')
const webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')


// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
  entry: {
    // 需要提取的库文件
    vendor: ['react','react-dom','react-redux','redux','react-router-dom','redux-thunk','axios']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}

```

### pagejson修改

```json
 "scripts": {
    "start": "react-app-rewired start",
    "dll": "webpack -p --progress --config ./webpack.dll.conf.js",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
}
```


