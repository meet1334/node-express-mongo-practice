export interface PaginationQuery {
  page?: string;
  limit?: string;
  [key: string]: any;
}

export const getPaginationOptions = (query: PaginationQuery) => {
  const page = Math.max(1, parseInt(query.page || '1', 10));
  const limit = Math.max(1, parseInt(query.limit || '10', 10));
  const skip = (page - 1) * limit;
  return { page, limit, skip };
};

export const formatPaginatedResponse = (data: any[], total: number, page: number, limit: number) => {
  const totalPages = Math.ceil(total / limit);
  return {
    data,
    pagination: {
      totalRecords: total,
      currentPage: page,
      totalPages,
      pageSize: limit,
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
    },
  };
};
