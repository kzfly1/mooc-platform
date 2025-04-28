function DifficultyButton({ difficulty, onClick }) {
  const difficultyColorMap = {
    Beginner: "btn-success",
    Intermediate: "btn-warning",
    Advanced: "btn-danger",
  };

  return (
    <a
      href="#"
      className={`btn ${difficultyColorMap[difficulty] || "btn-secondary"}`}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {difficulty === "Beginner" ? "Start Learning Now!" : "Enroll Now"}
    </a>
  );
}

export default DifficultyButton;
