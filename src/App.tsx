import "./App.scss";

import Layout from "./components/layout/Layout";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <Navigation />
        <Layout children={<Hero />} />
      </div>
    </div>
  );
}

export default App;
