import "./index.scss";
import { useState } from "react";
import courseList from "../../mock-data/course-list.mock.json";

const CourseCardList = () => {
  const [courses, setCourses] = useState(courseList);

  return (
    <div className="course-list-container">
      {courses.map(course => {
        return (
          <div className="card card-item" style={{ width: "18rem" }}>
            {course.isNew && <div className="new-badge">New</div>}
            <img
              src={require(`../../assets/images/${course.image}`)}
              class="card-img-top"
              alt="course-image"
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">
                Duration: {course.duration} weeks <br />
                Location: {course.location} <br />
                Language: {course.language}
              </p>
              <a href="#" class="btn btn-primary">
                Enroll now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseCardList;
