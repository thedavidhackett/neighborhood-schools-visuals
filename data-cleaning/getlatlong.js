const params = {
  access_key: "f75051dc09d9632f4d2de7b8d7cabdac",
  query: "1600 Pennsylvania Ave NW",
};

fetch("https://api.positionstack.com/v1/forward", {
  body: JSON.stringify(params),
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
