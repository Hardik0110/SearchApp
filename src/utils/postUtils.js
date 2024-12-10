export const filterPosts = (posts, query) => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.author.name.toLowerCase().includes(lowercaseQuery)
  );
};

export const getAuthorPosts = (posts, authorId) => {
  return posts.filter((post) => post.author.id === authorId);
};

export const findAuthorById = (posts, authorId) => {
  return posts.find((post) => post.author.id === authorId)?.author;
};