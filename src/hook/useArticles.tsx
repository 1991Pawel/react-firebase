import { useState, useEffect } from 'react';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const useArticles = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      if (process.env.REACT_APP_ARTICLES_URL && process.env.REACT_APP_ARTICLES_KEY) {
        fetch(`${process.env.REACT_APP_ARTICLES_URL + process.env.REACT_APP_ARTICLES_KEY}`)
          .then(data => data.json())
          .then(data => setArticle(data.articles))
          .catch(err => setError(err));
      }
    };

    fetchData();
  }, []);
  return { error, article };
};