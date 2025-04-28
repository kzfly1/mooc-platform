function CourseImage({ image, alt }) {
  return (
    <img
      src={require(`../../assets/images/${image}`)}
      className="card-img-top"
      alt={alt}
    />
  );
}

export default CourseImage;
