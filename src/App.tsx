import React, { useEffect, useState } from "react";
import "./App.css";
import RenderUsers from "./components/RenderUsers";
import usersProps from "./utils";

function App() {
  const [users, setUsers] = useState<usersProps["data"]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:4000")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Docker Tutorial</header>
      <main>
        <RenderUsers data={users} />
      </main>
    </div>
  );
}

export default App;
