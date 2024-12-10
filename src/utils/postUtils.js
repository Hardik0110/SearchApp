export const filterPosts = (posts, query) => {

  const lowercaseQuery = query?.toLowerCase();
   
};

export const getAuthorPosts = (posts, authorId) => {
  return posts.filter((post) => post.author.id === authorId);
};

export const findAuthorById = (posts, authorId) => {
  return posts?.find((post) => post.author.id === authorId)?.author;
};