const Scroll = ({ children, isMovieList }) => {
  return (
    <div
      className={`min-h-0 h-full overflow-y-scroll border border-gray-300 ${isMovieList ? "flex-1" : "w-1/4"
        }`}
    >
      {children}
    </div>
  );
};

export default Scroll;