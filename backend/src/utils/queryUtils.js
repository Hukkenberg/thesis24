exports.paginate = (query, { limit, offset }) => ({
  ...query,
  limit: parseInt(limit, 10) || 10,
  offset: parseInt(offset, 10) || 0,
});
