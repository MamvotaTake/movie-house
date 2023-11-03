export interface Movie {
    id: number,
    title: string,
    name: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number,
    adult: boolean,
    original_title: string,
    homepage: string,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
    },
    production_companies: {
        id: number,
        name: string,
        logo_path: string,
        origin_country: string
    }[],
    genres: {
        id: number,
        name: string
    }[]
}
