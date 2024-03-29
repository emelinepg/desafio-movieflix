import ReviewCard from 'components/ReviewCard';
import './styles.css';
import { hasAnyRoles } from 'utils/auth';
import ReviewList from 'components/ReviewList';
import { useParams } from 'react-router-dom';
import { ReviewProvider } from 'ReviewContext';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  return (
    <ReviewProvider>
      <div className="details-container">
        <h1 className="details-title">Tela detalhes do filme id: {movieId}</h1>
        <div className="container my-4 reviews-container">
          <div className="row">
            <div className="px-0">{hasAnyRoles(['ROLE_MEMBER']) && <ReviewCard />}</div>
          </div>
          <div className="row base-card review-list">
            <div className="px-0">
            <ReviewList movieId={movieId} />
            </div>
          </div>
        </div>
      </div>
    </ReviewProvider>
  );
};

export default MovieDetails;
