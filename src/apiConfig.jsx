const apiConf = {
     baseUrl : "https://api.themoviedb.org/3/",
     searchUrl : "https://api.themoviedb.org/3/search/movie",
     apiKey: "?api_key=2af988655577d05985545caa7786f118",
     originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
     w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
     logoUrl: `https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`
 }
 
 export default apiConf;
 
