const Reflection = ({reflection}) => {
  return (
    <section>
      <ul>
        <li>{reflection.postedTime.toString()}</li>
        <li>Submitted By {reflection.submittedBy}</li>
        <li>{reflection.reflection}</li>
      </ul>
    </section>
  );
};

export default Reflection;
