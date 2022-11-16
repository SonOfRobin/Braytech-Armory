const { base_endpoint } = require('../config.json');
const translateHashes = require('./translateHashes.js');
const { bungie_token } = require('../config.json');

const result = [];
const apiKey = { 'X-API-Key': bungie_token };
console.log(apiKey);
const getVendors = async () => {

  const fetch = await import('node-fetch');
  const res = await fetch.default(`${base_endpoint}/Vendors/?components=400`, { headers: apiKey });
  const data = await res.json();
  console.log(data);
  data.response
    ?.vendorGroups
    ?.data
    ?.groups
    .map((group) => {
      console.log(group);
      translateHashes(group.vendorGroupHash);
    });
};

getVendors();

