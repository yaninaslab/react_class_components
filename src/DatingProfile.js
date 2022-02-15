function DatingProfile(props) {
  return (
    <div>
      <img src={props.img} alt="man" width="200px" />
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default DatingProfile;
