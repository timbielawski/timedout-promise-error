const fetchError = () => {
  return new Promise((resolve, reject) => {
    throw new Error("Error in promise");
  });
};

export default fetchError;
