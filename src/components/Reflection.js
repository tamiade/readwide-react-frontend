import "./Reflection.css";

const Reflection = ({ reflection }) => {
  
  return (
    <section>
      <ul className="reflection-display">
        <li>{reflection.postedTime.toString()}</li>
        <li>
          <strong>Submitted By {reflection.submittedBy}</strong>
        </li>
        <li>{reflection.reflection}</li>
      </ul>
    </section>
  );
};

export default Reflection;
