import { Link } from 'react-router-dom';
import './styles.css';

const MovieList = () => {
    return (
        <div className="movie-list-container">
            <h1>Tela listagem de filmes</h1>
            <h4>Acessar <Link to="/movies/1">/movies/1</Link></h4>
            <h4>Acessar <Link to="/movies/2">/movies/2</Link></h4>
        </div>
    )
}

export default MovieList;