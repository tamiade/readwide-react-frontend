import "./Reflection.css";

const Reflection = ({ reflection }) => {
  
  return (
    <section>
      <ul className="reflection-display">
        <li>{new Date(reflection.postedTime).toLocaleString()}</li>
        <li>
          <strong>Submitted By {reflection.submittedBy}</strong>
        </li>
        <li>{reflection.reflection}</li>
      </ul>
    </section>
  );
};

export default Reflection;
