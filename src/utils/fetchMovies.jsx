export const fetchMovies = () => {
  const movies = [];

  // movies 배열 안에 객체 형태의 데이터 추가
  for (let i = 1; i <= 10; i++) { //렉이 너무 걸려서 반복 횟수 10회로 수정했습니다...
    movies.push({
      id: `${i}`,
      title: `Movie ${i}`,
      description: `Description for Movie ${i}`,
    });
    console.log("10개의 영화 목록 가져오는 중...");
  }

  // fetchMovies 함수가 동작하는데 오래 걸린다고 가정하기 위한 코드
  alert("데이터를 가져오는 중입니다...");

  return movies;
};