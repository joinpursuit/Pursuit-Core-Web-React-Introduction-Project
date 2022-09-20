import "./App.css";
import ContactList from "./ContactList";
import Post from "./Post";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "My",
  lastName: "Name",
};
const hello = <h1>Hello, {formatName(user)}!</h1>;
// const hello = <h1>Hello, world!</h1>;

function App() {
  return (
    <div className="App">
      {hello}
      <Post />
      <Post />
      <ContactList />
    </div>
  );
}

export default App;
