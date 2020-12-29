const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Config
const CONFIG = require('./config');

// Server cfg
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Format Fuctions
const FormatSearch = require('./format/formatFunctions').FormatSearch;
const FormatItem = require('./format/formatFunctions').FormatItem;

app.get('/', (req, res) => {
  res.send(`Funcionando`);
});

// Cluster test loadtest -c 10 --rps localhost:PORT/cluster
app.get('/cluster', (req, res) => {

  let worker = cluster.worker.id;
  res.send(`Running on worker with id ==> ${worker}`);
});

// Search
app.get('/api/items', function (req, res) {

  axios
    .get(`${CONFIG.baseURL}sites/MLA/search?q=${req.query.search}&limit=4`)
    .then(response => {

      let apiRes = response.data;

      // Formatea y envia la respuesta
      res.send(FormatSearch(apiRes));

    }).catch(error => {
      res.status(404).send(error);
    });
});

// Item Detail
app.get('/api/items/:id', async function (req, res) {

  let itemById;

  console.log(`${CONFIG.baseURL}items?ids=${req.params.id}`);

  try {
    // Se obtiene el item y se formatea el objeto
    await axios
      .get(`${CONFIG.baseURL}items?ids=${req.params.id}`)
      .then(response => {
        itemById = FormatItem(response.data[0].body);
      }).catch(err => console.log(err));

    // Se espèra el item y se obtiene la descripcion y se añade al objeto.
    await axios
      .get(`${CONFIG.baseURL}items?ids=${req.params.id}/description`)
      .then(response => {
        if (response.data[0].code === 200) {

          itemById.setDescription(response.data[0].body.plain_text);
          
        }
      }).catch(err => console.log(err));

    console.log(itemById);

    await axios
      .get(`${CONFIG.baseURL}categories/${itemById.category_id}`)
      .then(response => {
        if (res.statusCode === 200) {
          itemById.setCategoryId(response.data.path_from_root);
        }
      });

  } catch (error) {
    res.status(404).send(error);
  }

  // Se espera la finalizacion de las llamadas y formateo y se envia.
  res.send(itemById);
});

//Run Server
app.listen(process.env.PORT || CONFIG.port, () =>
  console.log(`${CONFIG.message}: ${CONFIG.port} ♥`)
);