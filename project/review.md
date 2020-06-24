### review

1. 小程序

- App
```
   App({
   		onLaunch(options){

   		},
   		onShow(options){

   		},
   		onHide(){

   		},
   		onError(msg){

   		},
   		globalData: {}
   	})


   	getApp()
```

- Page
```
	Page({
		data: {

		},
		onLoad(options){
			// 页面创建执行
		},
		onShow(){

			},
		onReady(){
			// 页面首次渲染完毕
		},
		onHide(){

		},
		onUnload(){},
		 onPullDownRefresh: function() {
		    // 触发下拉刷新时执行
		  },
		  onReachBottom: function() {
		    // 页面触底时执行
		  },
		  onShareAppMessage: function () {
		    // 页面被用户分享时执行
		  },
		  onPageScroll: function() {
		    // 页面滚动时执行
		  },
		  onResize: function() {
		    // 页面尺寸变化时执行
		  },
	})
```

- component
```
	{"component": true}

	Component({
	  properties: {
	    // 这里定义了innerText属性，属性值可以在组件使用时指定
	    innerText: {
	      type: String,
	      value: 'default value',
	    }
	  },
	  data: {
	    // 这里是一些组件内部数据
	    someData: {}
	  },
	  methods: {
	    // 这里是一个自定义方法
	    customMethod: function(){}
	  }
	})

	{
	  "usingComponents": {
	    "component-tag-name": "path/to/the/custom/component"
	  }
	}
```


- wx.createSelectorQuery()