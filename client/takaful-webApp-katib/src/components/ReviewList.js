import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getreviews") // replace with your API endpoint
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {reviews.map((review, index) => (
        <div key={index} style={{ width: "50%" }}>
          <Review
            imgUrl={review.imgUrl}
            userName={review.userName}
            reviewText={review.reviewText}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
