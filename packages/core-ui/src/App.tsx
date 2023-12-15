import * as React from "react";
import ErrorBoundary from "./components/ErrorBoundry";

const App1 = React.lazy(() =>
  // @ts-ignore
  import("app1/App").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  })
);

const App2 = React.lazy(() =>
  // @ts-ignore
  import("app2/App").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  })
);

const App3 = React.lazy(() =>
  // @ts-ignore
  import("app3/App").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  })
);

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => (
  <div>
    <h1>
      <center>{title}</center>
    </h1>
    <ErrorBoundary appName="App 1">
      <React.Suspense fallback="Loading App1">
        <App1 />
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary appName="App 2">
      <React.Suspense fallback="Loading App2">
        <App2 />
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary appName="App 3">
      <React.Suspense fallback="Loading App3">
        <App3 />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
