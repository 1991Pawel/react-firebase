import { useState } from 'react';
import { NewsCollection } from '../types/types';

export const usePagination = (dataEntries: NewsCollection[], elementsOnPage = 3) => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [postPerPage, setPostPerPage] = useState(elementsOnPage);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = dataEntries.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = dataEntries.length;
  const pageNumber = Array.from({ length: totalPosts / postPerPage }).map((_, i) => i + 1);

  const nextPage = () => pageNumber.length > currentPage && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToPage = (index: number) => setCurrentPage(index);

  return {
    indexOfFirstPost,
    indexOfLastPost,
    currentPosts,
    postPerPage,
    totalPosts,
    pageNumber,
    currentPage,
    nextPage,
    prevPage,
    goToPage,
  };
};