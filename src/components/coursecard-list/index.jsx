import CourseCard from "../coursecard";
import "./index.scss";

function CourseCardList({ courses }) {
  return (
    <div className="course-list-container">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseCardList;
