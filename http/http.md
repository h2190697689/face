### http/0.9
1. 一个get命令
2. 没有header等数据描述
3. 请求完毕，关闭tcp连接

### http/1.0
1. 增加post head
2. 增加status code 和header
3. 多字符集支持、多部分发送、权限、缓存等

### http/1.1
1. 持久连接： keep-alive
2. pipeline
3. 增加host和其他命令(options,put,delete,connect,trace)

### http/2.0
1. 所有数据以二进制传输
2. 多路复用(响应返回不再需要按照顺序)
3. 头部信息压缩
4. 消息推送功能

