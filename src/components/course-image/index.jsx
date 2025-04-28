function CourseImage({ image, title }) {
  return (
    <img
      src={require(`../../assets/images/${image}`)}
      className="card-img-top"
      alt={title}
    />
  );
}

export default CourseImage;
