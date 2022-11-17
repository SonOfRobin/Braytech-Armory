const { root_endpoint } = require('../config.json');

const labels = [];
const translateHashes = async (hash) => {
  console.log(hash);
  const { fetch } = await import('node-fetch');
  const res = await fetch(`${root_endpoint}/Manifest/DestinyVendorDefinition/${hash}`);
  const result = await res.json();
  labels.push(result.Response.displayProperties.name);
  console.log(labels);
};