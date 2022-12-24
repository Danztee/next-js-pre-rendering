function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of news article</h1>
      {articles.map((article) => {
        const { id, title, category } = article;

        return (
          <div key={id}>
            <h2>
              {id} {title} {category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
export default NewsArticleList;
