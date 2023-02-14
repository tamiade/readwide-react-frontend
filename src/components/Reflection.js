import "./Reflection.css";

const Reflection = ({ reflection }) => {
  
  return (
    <section>
      <ul className="reflection-display">
        <li>{reflection.postedTime.toString()}</li>
        <li>Submitted By {reflection.submittedBy}</li>
        <li>{reflection.reflection}</li>
      </ul>
    </section>
  );
};

export default Reflection;
