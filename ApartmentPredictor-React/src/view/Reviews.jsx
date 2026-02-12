export default function Reviews({ reviews }) {
  const rating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div>
      <h3>
        Reviews ({reviews.length}) {rating.toFixed(1)}{" "}
        {Array(Math.floor(rating)).fill("⭐️").join("")}
      </h3>

      {reviews.map((review) => (
        <div key={review.id}>
          <h4 style={{ margin: "0.5rem auto" }}>
            {review.title} {review.rating}/5
          </h4>
          <p style={{ margin: "0.5rem 0rem" }}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
