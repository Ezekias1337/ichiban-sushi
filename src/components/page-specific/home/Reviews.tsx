// Components
import { CustomerReview } from "../../customer-review/customerReview";
// Types
import { CustomerReviewProps } from "../../customer-review/customerReview";
// Assets
import SushiImage from "../../../assets/items/sushi-5.png";


const Reviews: React.FC = () => {
  const reviews: CustomerReviewProps[] = [
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: SushiImage,
      authorName: "Okay Okay",
      rating: 4.5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="our-reviews padding-left-and-right padding-top-80 padding-bottom-80">
      <h2 className="page-title">Our Reviews</h2>

      <div className="reviews-wrapper display-grid">
        {reviews.map((review) => {
          return (
            <CustomerReview
              authorImage={review.authorImage}
              authorName={review.authorName}
              rating={review.rating}
              reviewBody={review.reviewBody}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
