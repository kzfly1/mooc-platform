import "./index.scss";
import { useState } from "react";

function CourseCard({ course }) {
  const difficultyColorMap = {
    Beginner: "btn-success",
    Intermediate: "btn-primary",
    Advanced: "btn-danger",
  };

  const [reviewMode, setReviewMode] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleEnroll = () => {
    setEnrollmentCount(enrollmentCount + 1);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== "") {
      setReviewSubmitted(true);
      setReviewMode(false);
    }
  };

  return (
    <div key={course.id} className="card card-item" style={{ width: "18rem" }}>
      {course.isNew && <div className="new-badge">New</div>}
      <img
        src={require(`../../assets/images/${course.image}`)}
        className="card-img-top"
        alt="course-image"
      />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">
          Duration: {course.duration} weeks <br />
          Location: {course.location} <br />
          Language: {course.language}
        </p>
        <a
          href="#"
          className={`btn ${
            difficultyColorMap[course.difficulty] || "btn-secondary"
          }`}
          onClick={e => {
            e.preventDefault();
            handleEnroll();
          }}
        >
          {course.difficulty === "Beginner"
            ? "Start Learning Now!"
            : "Enroll Now"}
        </a>
        <p>
          Enrolled: {enrollmentCount} {enrollmentCount === 1 ? "time" : "times"}
        </p>
        {!reviewSubmitted ? (
          <>
            {!reviewMode ? (
              <button
                className="btn btn-outline-primary mt-2"
                onClick={() => setReviewMode(true)}
              >
                Leave a Review
              </button>
            ) : (
              <div style={{ marginTop: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Write your review"
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  className="form-control mb-2"
                />
                <button
                  className="btn btn-success"
                  onClick={handleReviewSubmit}
                >
                  Submit Review
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            style={{ marginTop: "0.5rem", color: "green", fontWeight: "bold" }}
          >
            Review Submitted ✅
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
