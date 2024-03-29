import { Review } from 'types/review';
import './styles.css';
import Star from 'assets/images/star.png';

type Props = {
  review: Review;
};

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="info-container">
        <img src={Star} alt="star" />
        <h4>{review.user.name}</h4>
      </div>
      <div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};
export default ReviewItem;
