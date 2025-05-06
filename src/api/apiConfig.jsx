const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const apiConf = {
     baseUrl ,
     apiKey: `?api_key=${apiKey}`,
     originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
     searchUrl: `${baseUrl}search/movie`,
     w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
     logoUrl: `https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`
 }
 
 export default apiConf;
 
