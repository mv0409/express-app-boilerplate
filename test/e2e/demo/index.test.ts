/* end to end tests */
import { Client } from "pg";
import { server, db } from "../../../src/index";
import request from "supertest";

describe("🧪  Basic Demo entity end to end tests", () => {
  afterAll(async () => {
    server.close();
    const connection = (await db) as Client;
    connection.end();
  });

  test("Should return HelloWorld! phrase", async () => {
    request(server).get("/demo").expect(200, "HelloWorld!");
  });
});
