class TimedoutError extends Error {
  constructor(error, ms) {
    super(`Timedout within ${ms}ms`);
    this.error = error;
  }
}
const timedoutPromise = (promise, ms = 1000, error = {}) => {
  let timedoutError = new TimedoutError(error, ms);
  let timeout = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject({ ...timedoutError.error, stack: timedoutError.stack });
    }, ms);
  });
  return Promise.race([promise, timeout]);
};
export default timedoutPromise;