### hash配置

#### [hash]
1. 打包main,vendors文件hash相同
2. 内容不变,不管多少次打包,hash值不变

### [chunkhash]
1. main,vendors不同
2. css和main生成相同hash

### [contenthash]
1. main,css生成不同hash