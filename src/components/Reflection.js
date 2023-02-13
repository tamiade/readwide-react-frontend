const Reflection = ({submittedBy, timePosted, reflectionEntry}) => {
  return (
    <section>
      <ul>
        <li>{submittedBy}</li>
        <li>{timePosted}</li>
        <li>{reflectionEntry}</li>
      </ul>
    </section>
  );
};

export default Reflection;
