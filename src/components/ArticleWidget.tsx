
import React from 'react';
import styled from 'styled-components';
import { getNewsData } from '../helpers/getNewsData';
import { NewsCollection } from '../types/types';
import { useArticles } from '../hook/useArticles';

const SectionHeading = styled.h3`
      margin:1rem 0;
`;

const Article = styled.article`
  position:relative;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0.3rem;
  transition: background-color .2s ease-in-out;



 a {
     text-decoration:none;
 }

 h5 {
     font-size:.8rem;
     color: ${({ theme }) => theme.colors.dark};
     font-weight: ${({ theme }) => theme.fontWeight.semi};
 }

 time {
    position:absolute;
     top:0;
     right:0;
     padding:.2rem;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.2rem;
    transform:translateY(50%);
 }

 img {
     height:auto;
     width:80px;
 }
 &:hover {
    background-color: ${({ theme }) => theme.colors.dark};

    h5,text {
        color:#fff;
    }
  }
`;

const ArticleWidget = () => {
  const { article, error } = useArticles();  
  console.log('render');
  return (
    <>
      <SectionHeading>Wiadomośći</SectionHeading>
      <p>{error && 'Nie można załadować artykułów'}</p>
      {article?.map(({ title, url, publishedAt, urlToImage }:NewsCollection) => {
        return (
          <a key={title} target="_blank" rel="noopener noreferrer" href={url}>
            <Article>
              <img src={urlToImage} alt="" />
              <h5>{title}</h5>
              <time>{getNewsData(publishedAt)}</time>
            </Article>

          </a>
        );
      })}
    </>
  );
};


export default React.memo(ArticleWidget);