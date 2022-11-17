const { base_endpoint, bungie_token, bungie_client_id, auth_url } = require('../config.json');
const translateHashes = require('./translateHashes.js');
const { randomBytes } = require('node:crypto');

const result = [];
const stateKey = randomBytes(21).toString('base64url');
console.log(stateKey.toString('base64url'));
const apiKey = { 'X-API-Key': bungie_token };
console.log(apiKey);
const getVendors = async () => {
  const authUrl = `${auth_url}/?client_id=${bungie_client_id}&response_type=code&state=${stateKey}`;
  console.log(authUrl);
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

