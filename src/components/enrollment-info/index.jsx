function EnrollmentInfo({ count }) {
  return (
    <p>
      Enrolled: {count} {count === 1 ? "time" : "times"}
    </p>
  );
}

export default EnrollmentInfo;
