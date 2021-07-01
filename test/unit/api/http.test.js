import http from "@/api/http";
import { expect } from "@jest/globals";
describe("api/http", () => {
  describe("http.get", () => {
    describe("http.get.instance", () => {
      it("must be a function", () => {
        expect(http.get).toBeTruthy();
      });
    });
  });
});
