import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./search/SearchBar";

const Home = props => {
  const [teachers, setTeachers] = useState([]);
  // console.log("props from Home.js: ", props);
  // const [user, setUser] = useState({});

  console.log("props.user: ", props.user);

  const fetchItems = async () => {
    const data = await axios("/api/teachers", { withCredentials: true });
    // console.log("data", JSON.parse(data.data.teachers));

    setTeachers(JSON.parse(data.data.teachers));
    // const user = data.data.user;
    // user.type = data.data.type;
    // setUser(user);
    // setTeachers(data.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  // console.log("user Home.js: ", user);
  let imgURL =
    "https://s17026.pcdn.co/wp-content/uploads/sites/9/2017/06/Music-teacher.jpeg";

  return (
    <div className="App">
      <div>
        <SearchBar teachers={teachers} setTrigger={props.setTrigger} />
      </div>
    </div>
  );
};

export default Home;
