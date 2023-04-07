const genres = {
  "humor": "Humor",
  "science": "Science",
  "health": "Health",
  "food-and-fitness": "Food & Fitness",
  "education": "Education",
  "business-books": "Business",
  "culture": "Culture",
  "celebrities": "Celebrities",
  "advice-how-to-and-miscellaneous": "Advice & How-To",
  "hardcover-nonfiction": "NonFiction",
  "hardcover-fiction": "Fiction",
  "picture-books": "Picture Books"
}

export const formatGenre = (genre) => {
  if (genres[genre]) {
    return genres[genre]
  } else return genre
}