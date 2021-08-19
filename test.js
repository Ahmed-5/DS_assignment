const http = require("http");

// POST request

addPerson = (obj) => {
  const data = new TextEncoder().encode(JSON.stringify(obj));

  const postOps = {
    hostname: "localhost",
    port: 3000,
    path: "/people",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const postOneReq = http.request(postOps, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      const result = JSON.parse(d);
      console.log(result);
    });
  });

  postOneReq.on("error", (error) => {
    console.error(error);
  });

  postOneReq.write(data);
  postOneReq.end();
};

// GET requests
// GET all people

getPeople = () => {
  const getAllOps = {
    hostname: "localhost",
    port: 3000,
    path: "/people",
    method: "GET",
  };

  const getAllReq = http.request(getAllOps, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      const result = JSON.parse(d);
      console.log(result);
    });
  });

  getAllReq.on("error", (error) => {
    console.error(error);
  });

  getAllReq.end();
};

// GET one by name

getPersonByName = (name) => {
  const getOneOps = {
    hostname: "localhost",
    port: 3000,
    path: `/people/${name}`,
    method: "GET",
  };

  const getOneReq = http.request(getOneOps, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      const result = JSON.parse(d);
      console.log(result);
    });
  });

  getOneReq.on("error", (error) => {
    console.error(error);
  });

  getOneReq.end();
};

// USING THOSE CLIENT FUNCTIONS

addPerson({ name: "ahmed", age: 35 });
addPerson({ name: "mohammed", age: 28 });

getPeople();

getPersonByName("ahmed");