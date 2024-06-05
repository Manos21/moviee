export default function update(index,setAll){
    setAll(prevMovies => {
        const updatedMovies = [...prevMovies]; // Make a shallow copy of the array
        updatedMovies[index] = { ...updatedMovies[index], isBookmarked: !updatedMovies[index].isBookmarked }; // Toggle isBookmarked
        return updatedMovies;
      });
}