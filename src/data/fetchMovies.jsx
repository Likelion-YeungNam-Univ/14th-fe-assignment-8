export const fetchMovies = () => {
  const movies = [];
  for (let i = 1; i <= 2500; i++) {
    movies.push({
      id: `${i}`,
      title: `Movie ${i}`,
      description: `Description for Movie ${i}`,
    });
  }
  alert("데이터를 가져오는 중입니다...");
  return movies;
};
