import "./App.css";
import Navbar from "./components/Navbar";
import Button2, { Button } from "./components/Button";
import {Form} from "./components/Form";

const DUMMY = [
  { id: 1,
    title: "first note" 
  }
];

function App() {

  return (
    <>
{DUMMY.map((item) => (
  <div key={item.id}>
    <Navbar name={item.title} user="vishva" btnText="Login" />
  </div>
))}

  <Navbar name="home" btnText="Login" user="user" count={5} />
  <Button btnText="submit" />
  <Form />
</>
  );
}

export default App;
