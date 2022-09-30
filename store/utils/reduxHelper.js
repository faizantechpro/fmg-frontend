export const createAction = (type) => {
  return (payload) => {
    return {
      type,
      payload,
    };
  };
};
