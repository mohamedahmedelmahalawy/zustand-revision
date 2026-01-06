import "./App.css";

import CounterTwo from "./components/counter/CounterTwo";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";

function App() {
  console.log("App rendered");
  return (
    <>
      <Navbar />
      <CounterTwo />
      <Posts />
    </>
  );
}

export default App;
