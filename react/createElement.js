function App() {
  return (
      <p className="title">hello world</p>
  );
}

ReactDOM.render(<APP />, document.getElementById("root"));


/*  babel 中转换  */
function App() {
  return React.createElement(
    "p",
    { className: "title" },
    "hello world"
  );
}

ReactDOM.render(React.createElement(APP, null), document.getElementById("root"));


真实构造出的为虚拟dom,即js对象
{
	type: "",
	props: { className: "title", children: "hello world" },
	ref: null,
	key: null
}