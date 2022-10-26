const rdfDereferencer = require("rdf-dereference").default;

const data = [];

async function dereference() {
  const { data } = await rdfDereferencer.dereference("ds.ttl", {
    localFiles: true,
  });
  data
    .on("data", (quad) => {
      console.log(quad);
      //   console.log(quad._subject);
    })
    .on("error", (error) => console.error(error))
    .on("end", () => console.log("All done!"));
}

dereference();
