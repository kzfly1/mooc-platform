function ReviewForm({ reviewText, onChange, onSubmit }) {
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <input
        type="text"
        placeholder="Write your review"
        value={reviewText}
        onChange={onChange}
        className="form-control mb-2"
      />
      <button className="btn btn-success" onClick={onSubmit}>
        Submit Review
      </button>
    </div>
  );
}

export default ReviewForm;
