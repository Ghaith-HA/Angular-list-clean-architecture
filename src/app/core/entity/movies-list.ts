export class MovieList {
    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public id: Number,
        public original_language: string,
        public original_title: string,
        public poster_path: string,
        public release_date: string,
        public title: string,
        public vote_average: string,
        public budget: Number,
        public revenue: Number,
        public status: string,
        public tagline: string,
        public overview: string,

    ) {
    }
}
