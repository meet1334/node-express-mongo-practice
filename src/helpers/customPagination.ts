const customPagination = (data: any, count: number, page: number = 1, limit: number = 10) => {
  const totalPages = Math.ceil(count / limit);
  return {
    results: data,
    page: page,
    limit: limit,
    totalPages,
    totalResults: count,
  };
};

export default customPagination;
