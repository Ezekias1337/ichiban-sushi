// Components
import { CustomerReview } from "../../customer-review/customerReview";
// Types
import { CustomerReviewProps } from "../../customer-review/customerReview";
// Assets
import Review1 from "../../../assets/reviews/review-1.png";
import Review2 from "../../../assets/reviews/review-2.png";
import Review3 from "../../../assets/reviews/review-3.png";
import Review4 from "../../../assets/reviews/review-4.png";
import Review5 from "../../../assets/reviews/review-5.png";
import Review6 from "../../../assets/reviews/review-6.png";

const Reviews: React.FC = () => {
  const reviews: CustomerReviewProps[] = [
    {
      authorImage: Review1,
      authorName: "Bonnie B",
      rating: 5,
      reviewBody: `Best sushi near downtown Greer and it’s all you can eat! I’m very picky about sushi, but Ichiban checks all of my boxes! It’s in the same location where Romano’s was located. They also serve other Asian cuisine that is delicious!
        In addition to the great food, the service is great! The staff is attentive and friendly.
        Give Ichiban a try, they won’t disappoint!`,
    },
    {
      authorImage: Review2,
      authorName: "Grace Ola",
      rating: 5,
      reviewBody: `First of all, it’s amazing that we have a sushi all-you-can-eat spot in Greer. The restaurant is very nice and cozy. This is definitely a great date spot, without the pressure of having to make a reservation.
        I ordered edamame, sesame balls, tuna tataki, yellowtail jalapeño, rainbow roll, Naruto, and mango mochi. The edamame was perfect—not mushy but crispy. The sesame balls were also crispy, and the quality of the fish was really good.
        I will definitely be returning. It’s so convenient that it’s so close to home!`,
    },
    {
      authorImage: Review4,
      authorName: "Ed Goretoy",
      rating: 5,
      reviewBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      authorImage: Review3,
      authorName: "JeriLe Jensen",
      rating: 5,
      reviewBody: `5+ Stars! We drove 45 minutes for this goodness and will be back. Give yourself plenty of time, if it's your first visit, to experience and indulge. The service was spectacular and the food... Yummmmmmy 🤤 (be careful to not waste food) 😜`,
    },
    {
      authorImage: Review5,
      authorName: "Earl",
      rating: 5,
      reviewBody: `The all you can eat sushi and bento boxes are awesome! We liked it a lot. The choices on the all you can eat menu include appetizers, desserts, and countless sushi options. I have been twice and loved it both times. I highly recommend giving it a try. You won’t be disappointed.`,
    },
    {
      authorImage: Review6,
      authorName: "Paul Patelis",
      rating: 5,
      reviewBody: `Delightful. It's worth the stop. Sushi was amazing. Staff was really kind. The rolls are endless and super yummy. You get full rolls on your order, but they are perfect size, so you can order more than a few and try so many different options.`,
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
