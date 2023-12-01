export const getPageRange = (items: any[], currentPage: number, itemsPerPage: number) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items?.slice(startIndex, endIndex) || [];
};

export const calculatePaginationInfo = (currentPage: number, pagesPerSlider: number, totalPages: number[]) => {
  const currentSlider = Math.ceil(currentPage / pagesPerSlider);
  const startPage = (currentSlider - 1) * pagesPerSlider + 1;
  const endPage = Math.min(currentSlider * pagesPerSlider, totalPages.length);

  return { currentSlider, startPage, endPage };
};
