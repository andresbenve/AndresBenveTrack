//cambiada con try para ver si funciona

module.exports = (client, apiKey, secretKey) => {
  try {
    return {
      // GET /localidades
      // envioPack.localidades.all({query})
      async all(query = {}) {
        const { data } = await client.get("/localidades", { params: query });
        return data;
      },
      // GET /localidades
      // envioPack.localidades.get(id, query)
      async get(id, query = {}) {
        const { data } = await client.get(`/localidades/${id}`, {
          params: query,
        });
        return data;
      },
    };
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
