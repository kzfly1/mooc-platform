import "./index.scss";
import NewBadge from "../new-badge";
import CourseImage from "../course-image";
import DifficultyButton from "../difficulty-button";
import EnrollmentInfo from "../enrollment-info";
import ReviewForm from "../review-form";
import ReviewConfirmation from "../review-confirmation";
import { useState } from "react";

function CourseCard({ course }) {
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleEnroll = () => setEnrollmentCount(enrollmentCount + 1);
  const handleReviewSubmit = () => {
    if (reviewText.trim() !== "") {
      setReviewSubmitted(true);
      setReviewMode(false);
    }
  };

  return (
    <div key={course.id} className="card card-item" style={{ width: "18rem" }}>
      {course.isNew && <NewBadge />}
      <CourseImage image={course.image} alt="course-image" />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">
          Duration: {course.duration} weeks <br />
          Location: {course.location} <br />
          Language: {course.language}
        </p>
        <DifficultyButton
          difficulty={course.difficulty}
          onClick={handleEnroll}
        />
        <EnrollmentInfo count={enrollmentCount} />

        {!reviewSubmitted ? (
          !reviewMode ? (
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => setReviewMode(true)}
            >
              Leave a Review
            </button>
          ) : (
            <ReviewForm
              reviewText={reviewText}
              onChange={e => setReviewText(e.target.value)}
              onSubmit={handleReviewSubmit}
            />
          )
        ) : (
          <ReviewConfirmation />
        )}
      </div>
    </div>
  );
}

export default CourseCard;
