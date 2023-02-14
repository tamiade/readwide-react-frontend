import { useState, useEffect } from "react";
import axios from "axios";
import Reflection from "./Reflection";
import "./ReflectionList.css";

const ReflectionList = ({ reflections }) => {

  const [reflectionData, setReflectionData] = useState([]);

  useEffect(() => {
    axios
      .get("https://readwide-spring-api.herokuapp.com/reflections")
      .then((response) => {
        setReflectionData(response.data);
      });
  }, []);

  const reflectionComponents = reflections.map((reflection) => {
    return (
      <li>
        <Reflection
          reflection={reflection}
        />
      </li>
    );
  });

  return (
    <section className="reflections-container">
      <h2>Community Reflections</h2>
      <div>{reflectionComponents}</div>
    </section>
  );
};

export default ReflectionList;
