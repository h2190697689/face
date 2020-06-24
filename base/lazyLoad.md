## 图片懒加载 + 预加载
### 懒加载
1. data-src中存储真实图片地址
2. src中为默认地址
3. 滚动到该图片时,src改变为真实地址
```
 $(function(){
        function lazyload(){
            $('img').each(function (index, value) {
            
                if($(this).attr('loaded') == '1')return;
      
                if ($(this).offset().top <= $(window).height() + $(document).scrollTop()) {
                    $(this).attr('src',$(this).attr('data-src')).attr('loaded','1');
                }
            })
        }
        $(window).scroll(function(){
            lazyload();
        }).trigger('scroll');
    })
```

### 预加载
1. 利用浏览器的缓存，提前加载图片
2. 第二次加载时，重缓存中加载图片
```
	var img = new Image();
	img.src= "preview.jpg"
```