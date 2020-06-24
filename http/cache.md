### 强缓存
1. expires
2. Cache-Control: public, max-age=0

### 协商缓存
1. ETag: W/"8bf-17272c9f1e3"  / If-None-Match: W/"8bf-17272c9f1e3"
2. Last-Modified: Tue, 02 Jun 2020 02:08:56 GMT / If-Modified-Since: Tue, 02 Jun 2020 02:08:56 GMT



### 命中浏览器缓存分为两类：强缓存，协商缓存。

1. 强缓存：不会发起HTTP请求，直接从浏览器缓存中读取文件。
	HTTP 1.0中，采用Expires头指定资源过期时间；
	HTTP 1.1中，采用Cache-Control: max-age指定资源被缓存多久；
2. 协商缓存：向服务器发起HTTP请求，如果资源文件并未更新，response响应码即为304，随后从浏览器缓存中下载该文件，并不会从服务器下载。
	HTTP 1.0中，采用Last-Modified(response header)和If-Modified-Since(request header)来指定资源过期时间；
	HTTP 1.1中，采用E-Tag(response/request header)和If-None-Match来决定该资源是否过期；
