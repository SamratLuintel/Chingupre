const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/photos/:sol/:camera", async (req, res) => {
  const sol = req.params.sol;
  const camera = req.params.camera;
  console.log(sol, camera);

  try {
    const response = await axios.get(
      `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}`
    );
    const json = response.data;
    if (json.photos.length === 0) return res.status(200).send([]);
    const photos = json.photos.map(obj => obj.img_src);
    console.log(photos);
    return res.status(200).send(photos);
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // if not https redirect to https unless logging in using OAuth
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || port, () => {
  console.log("Server has started");
});
