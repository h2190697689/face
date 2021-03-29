const WithLazyLoad = (WrappedComponent: React.ComponentType<any>) =>
  class HOC extends React.Component {
    private displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    public render() {
      console.log(this.displayName)

      return (
        <React.Suspense fallback={<div>Loading...</div>} >
            <WrappedComponent {...this.props} />
        </React.Suspense>  
    )
  }
};

const About = React.lazy(() => import('./components/About/About'));
const Hello = React.lazy(() => import('./components/Hello/Hello'));
const Home = React.lazy(() => import('./components/Home/Home'));

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={WithLazyLoad(Hello)}  />
          <Route path="/home" exact={true} component={WithLazyLoad(Home)} />
          <Route path="/about" exact={true} component={WithLazyLoad(About)} />
        </Switch>
      </BrowserRouter>
    );
  }
}