import { MovieList } from '../entity';

export abstract class MovieListRepository {
    public abstract getAllMovies(query?: string, size?: Number, skip?: Number): Promise<MovieList[]>;
    public abstract getMovieDetails(movieId: number): Promise<MovieList>;
}
