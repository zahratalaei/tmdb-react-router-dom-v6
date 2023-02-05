const apiConf = {
     baseUrl : "https://api.themoviedb.org/3/",
     apiKey: "?api_key=6ed12e064b90ae1290fa326ce9e790ff",
     searchUrl : "https://api.themoviedb.org/3/search/movie",
     originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
     w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
     logoUrl: `https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`
 }
 
 export default apiConf;
 