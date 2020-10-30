import React from 'react';
import styled from 'styled-components';
import { getNewsData } from '../helpers/getNewsData';
import { NewsCollection } from '../types/types';
import { usePagination } from '../hook/usePagination';
import { data } from '../data/fakeData';

const SectionHeading = styled.h3`
      margin:1rem 0;
`;

interface Props {
  isActive: boolean;
}

const ButtonWrapper = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
`;

const PaginationBtn = styled.button<Props>`
      display:block;
      background-color:${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.light};
      color:${({ isActive, theme }) => isActive ? theme.colors.light : theme.colors.primary};
      height:2rem;
      width:2rem;
      border: 1px solid #ccc;
      cursor:pointer;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Article = styled.article`
  position:relative;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.3rem;
  transition: background-color .2s ease-in-out;




 h5 {

     font-size:.9rem;
     color: ${({ theme }) => theme.colors.textDark};
     font-weight: ${({ theme }) => theme.fontWeight.semi};
 }

 time {
    font-size:.8rem;
    position:absolute;
     top:0;
     right:0;
     padding:.2rem;
    color: ${({ theme }) => theme.colors.textLight};
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
  const { currentPosts, pageNumber, goToPage, currentPage } = usePagination(data);
  return (
    <>
      <SectionHeading>Wiadomośći</SectionHeading>
      <ButtonWrapper>
        {pageNumber.map((number: number) => <PaginationBtn isActive={currentPage === number} onClick={() => goToPage(number)} key={number}>{number}</PaginationBtn>)}
      </ButtonWrapper>
      {currentPosts?.map(({ title, url, publishedAt, urlToImage }: NewsCollection) => {
        return (
          <StyledLink key={title} target="_blank" rel="noopener noreferrer" href={url}>
            <Article>
              <img src={urlToImage} alt="" />
              <h5>{title}</h5>
              <time>{getNewsData(publishedAt)}</time>
            </Article>
          </StyledLink>
        );
      })}
    </>
  );
};


export default React.memo(ArticleWidget);