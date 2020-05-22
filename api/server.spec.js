const Resources = require("../resources/resourcesModel");

const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

afterAll(async () => {
  await db("resources").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });

  describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then(response => {
            // from jest
            expect(response.status).toBe(200);
          })
      );
    });

    it("should return { api: 'up' }", () => {
        return supertest(server)
          .get("/")
          .then(response => {
            expect(response.body).toEqual({ api: "up" });
            expect(response.body.api).toBeDefined();
            expect(response.body.api).toBe("up");
          });
      });

      describe("GET /resources", () => {
        it("should return an array", () => {
          return supertest(server)
            .get("/resources")
            .then(response => {
              expect(Array.isArray(response.body)).toBe(true);
            });
        });
      });

      describe("GET /resources", () => {
        it("should return an array with 0 elements", () => {
          return supertest(server)
            .get("/resources")
            .then(response => {
              expect(response.body).toHaveLength(0);
            });
        });
      });

      describe("POST /resources", () => {
        test("posts to the resources", () => {
          const insert = {
    
              resource: "jifejfijeoo"
            
          }
          supertest(server).post('/resources').send(insert).then(res => {
            expect(res.status).toBe(201)
          })
        });
      });

      describe("DELETE /resources/:id", () => {
        it("should return an array with 0 elements", () => {
          return supertest(server)
            .delete("/resources/1")
            .then(res => {
              expect(res.status).toBe(201)
            });
        });
      });

})

})