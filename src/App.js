import "./App.css";
import DatingProfile from "./DatingProfile";
import { Likes } from "./Likes";
import { Names } from "./Names";

function App() {
  return (
    <div>
      <DatingProfile
        img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        name="Bob"
        age="25"
        description="I want to be loved"
      />
      <DatingProfile
        img="https://images.unsplash.com/photo-1581599129568-e33151627628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        name="Ed"
        age="30"
        description="I am so lonely"
      />
      <DatingProfile
        img="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
        name="Dilan"
        age="32"
        description="I am a dreamer"
      />
      <Likes />
      <Names />
    </div>
  );
}

export default App;
