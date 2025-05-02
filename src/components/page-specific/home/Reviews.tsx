// Components
import { CustomerReview } from "../../customer-review/customerReview";
import DecorativeImage from "../../general-page-layout/decorative-image/DecorativeImage";
// Types
import { CustomerReviewProps } from "../../customer-review/customerReview";
// Assets
import Review1 from "../../../assets/reviews/review-1.png";
import Review2 from "../../../assets/reviews/review-2.png";
import Review3 from "../../../assets/reviews/review-3.png";
import Review4 from "../../../assets/reviews/review-4.png";
import Review5 from "../../../assets/reviews/review-5.png";
import Review6 from "../../../assets/reviews/review-6.png";

import Handfan1 from "../../../assets/items/handfan-1.png";
import Sake from "../../../assets/items/sake.png";
import BonzaiTree from "../../../assets/items/bonzai-tree.png";

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
      authorImage: Review5,
      authorName: "Bell",
      rating: 5,
      reviewBody: `I just had the BEST vegetarian ramen from this place! The restaurant is pretty big with enough parking. There is of course, a large sushi selection, but the vegetarian ramen was so flavorful and perfect. I was completely taken aback!
        My friend got the mango tango sushi and it was also pretty good. I would highly recommend Ichiban Sushi for some good Japanese food in Greer!`,
    },
    {
      authorImage: Review4,
      authorName: "Ed Goretoy",
      rating: 5,
      reviewBody:
        "I've been to a lot of sushi places in my area places for an affordable price. My wife and I absolutely love this location, great sushi rolls, and really quick service.",
    },
    {
      authorImage: Review3,
      authorName: "JeriLe Jensen",
      rating: 5,
      reviewBody: `5+ Stars! We drove 45 minutes for this goodness and will be back. Give yourself plenty of time, if it's your first visit, to experience and indulge. The service was spectacular and the food... Yummmmmmy 🤤 (be careful to not waste food) 😜`,
    },

    {
      authorImage: Review6,
      authorName: "Paul Patelis",
      rating: 5,
      reviewBody: `Delightful. It's worth the stop. Sushi was amazing. Staff was really kind. The rolls are endless and super yummy. You get full rolls on your order, but they are perfect size, so you can order more than a few and try so many different options.`,
    },
  ];

  return (
    <section className="our-reviews padding-left-and-right padding-top-80 padding-bottom-80 position-relative">
      <h2 className="page-title">Our Reviews</h2>

      <DecorativeImage imgSrc={Sake} imgAlt="Sake Bottle" position="top-right" />
      <DecorativeImage
        imgSrc={Handfan1}
        imgAlt="Handfan"
        position="center-left"
      />
      <DecorativeImage
        imgSrc={BonzaiTree}
        imgAlt="Bonzai Tree"
        position="bottom-right"
      />

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
