import timedoutPromise from "../src";
import mockFetch from "../__mocks__/fetch";

describe("timedoutPromise with a mock fetch", () => {
  it("resolves before the timeout is reached", async done => {
    expect.assertions(1);
    const response = await timedoutPromise(
      mockFetch(200, { status: 200 }),
      4000
    );
    expect(response.status).toEqual(200);
    done();
  });

  it("timeouts before it resolved", async done => {
    expect.assertions(2);
    try {
      const response = await timedoutPromise(mockFetch(3000, {}), 2000, {
        status: 408,
        message: "no repsonse within timeout"
      });
    } catch (error) {
      expect(error.status).toEqual(408);
      expect(error.stack).toMatch(/Timedout within 2000ms/);
      done();
    }
  });
});
