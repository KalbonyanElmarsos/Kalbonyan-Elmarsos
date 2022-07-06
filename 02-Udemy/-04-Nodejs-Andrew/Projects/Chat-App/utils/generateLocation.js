exports.generateLocation = (location) => {
  return {
    url: location,
    createdAt: new Date().getTime(),
  };
};
