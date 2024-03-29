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
      <div>
        <h1>Tela detalhes do filme id: {movieId}</h1>
        <div className="container my-4 catalog-container">
          <div className="row">
            <div>{hasAnyRoles(['ROLE_MEMBER']) && <ReviewCard />}</div>
          </div>
          <div className="row">
            <ReviewList movieId={movieId} />
          </div>
        </div>
      </div>
    </ReviewProvider>
  );
};

export default MovieDetails;
