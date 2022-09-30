export const asyncActionType = (type) => ({
  PENDING: `${type} - Pending`,
  SUCCESS: `${type} - Success`,
  ERROR: `${type} - Error`,
  SIMPLE: type,
});
