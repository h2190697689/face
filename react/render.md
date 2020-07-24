1. 调用React.createElement生成element,即组成虚拟DOM树的节点
```element样子
	{
		type: "div",
		props: {
			className: "main",
			id: "main",
			children: [
				{
					type: function Header,
					props: {
						children: "hello, This is React"
					}
				},
				{
					type: "p",
					props: {
						children: "start to learn right now!"
					}
				}
			]
		}
	}
```
```children 类型
	1. string
	2. 原生DOM节点
	3. React Component 自定义组件
	4. false,null,undefined,number
	5. 数组-使用map方法的时候
```


2. element如何生成真实节点
> 判断element是否为Object,分开调用不同实例对象
- ReactDOMComponent、 ReactCompositeComponentWrapper、 ReactDOMTextComponent、ReactDOMEmptyComponent
```
	{
		type: "div",
		props: {
			className: "cn",
			children: "hello world"
		}
	}

	mountComponent(container){
		const domElement = document.createElement(this._currentElement.type);
  		const textNode = document.createTextNode(this._currentElement.props.children);
		domElement.appendChild(textNode);
		container.appendChild(domElement);
		return domElement;
	}

	updateComponent(){
		
	}
```
