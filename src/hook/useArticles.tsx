import  { useState, useEffect } from 'react';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/', ;

export const useArticles = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  useEffect(()  => {    
    const fetchData =  () => {
      if(process.env.REACT_APP_ARTICLES_URL && process.env.REACT_APP_ARTICLES_KEY) {
        fetch(`${proxyUrl + process.env.REACT_APP_ARTICLES_URL + process.env.REACT_APP_ARTICLES_KEY}`)
          .then(data => data.json())
          .then(data => setArticle(data.articles.slice(0, 3)))
          .catch(err => setError(err));
      }
    };  
  
    fetchData();
  }, []);  
  return { error, article };    
};