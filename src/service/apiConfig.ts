const  apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    // apiKey: process.env.MOVIEDB_API_KEY,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
    imageBaseUrl: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
}


export default apiConfig