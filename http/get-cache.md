### 浏览器第二次访问默认缓存

#### 解决方法
1. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")

2. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")

3. 在URL后面加上一个随机数： "?rand=" + Math.random()

4. 在URL后面加上时间搓："?nowtime=" +new Date().toTimeString()

5. 如果是使用jQuery，可以在开始的时候设置，清除缓存，$.ajaxSetup({cache:false})

6. 改用post接口


#### $.ajax
```
	$.ajax({
		url: "http://baidu.com",
		method: "get",
		cache: false,
		dataType: "json",
		error: function(data){},
		success: function(data){}
	})
```

#### axios
```
	const api = axios.create({
		const api = axios.create({
        	"Cache-Control":"no-cache",
        	"If-Modified-Since": "0"
		})
	})
```


#### html
```
	<meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta http-equiv="progma" content="no-cache">
```

#### XMLHttpRequest
```
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true; // 代表是否授权cookie和header信息
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.state === 200){
			console.log(xhr.response)
		}
	}
	xhr.open("get","url", true);
	xhr.setRequestHeader("If-Modified-Since","0")
    xhr.setRequestHeader("Cache-Control","no-cache")
	xhr.send();
```

#### fetch
```
	fetch("url",{
		credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Cache-Control":"no-cache",
        	"If-Modified-Since": "0"
        },
        mode: "cors",//请求的模式
        cache: "force-cache"
	})
	.then(res=>res.json())
	.then(data=>{})
```

