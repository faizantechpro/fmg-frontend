import { Carousel } from "antd";
import { createRef } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./review.module.css";

function ReviewCarousel({ slideshow }) {
  const carousel = createRef();
  const OnNext = () => {
    carousel.current.next();
  };
  const OnPrev = () => {
    carousel.current.prev();
  };
  return (
    <div className={`${styles.people} xl:px-20 lg:px-16 px-4`}>
      <Carousel ref={carousel} dots={false}>
        {slideshow?.map((item) => (
          <ReviewCard
            key={item._id}
            userName={item.userName}
            value={item.value}
            title={item.title}
            description={item.description}
            titleArabic={item.titleArabic}
            descriptionArabic={item.descriptionArabic}
            img={item.img}
            OnNext={OnNext}
            OnPrev={OnPrev}
          ></ReviewCard>
        ))}
      </Carousel>
    </div>
  );
}
export default ReviewCarousel;
