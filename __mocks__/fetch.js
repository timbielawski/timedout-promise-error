const fetch = (ms, response) => {
  return new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      resolve(response);
    }, ms);
  });
};

export default fetch;
