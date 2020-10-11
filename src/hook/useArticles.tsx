import  { useState, useEffect } from 'react';

export const useArticles = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  useEffect(()  => {    
    const fetchData =  () => {
      if(process.env.REACT_APP_ARTICLES_URL && process.env.REACT_APP_ARTICLES_KEY) {
        fetch(`${process.env.REACT_APP_ARTICLES_URL + process.env.REACT_APP_ARTICLES_KEY}`)
          .then(data => data.json())
          .then(data => setArticle(data.articles.slice(0, 3)))
          .catch(err => setError(err));
      }
    };  
  
    fetchData();
  }, []);  
  return { error, article };    
};