const { randomBytes } = require('node:crypto');
const { bungie_token, bungie_client_id, auth_url, token_url } = require('../config.json');

const apiKey = { 'X-API-Key': bungie_token };

const getAuth = async () => {
  const options = { headers: { apiKey } };
  const stateKey = randomBytes(21).toString('base64url');
  console.log(stateKey.toString('base64url'));
  const authUrl = `${auth_url}/?client_id=${bungie_client_id}&response_type=code&state=${stateKey}`;
  const fetch = await import('node-fetch');
  const res = await fetch(authUrl);
};

const getToken = async (auth) => {
  const fetch = await import('node-fetch');
  const header = { 'Content-type': 'application/x-www-form-urlencoded' };
  const formBody = `grant_type=authorization_code&code=${auth}&client_id=41822`;
  const options = {
    method: 'POST',
    body: formBody
  };
  const res = await fetch(token_url, options);
  const data = await res.json();
  console.log(data);
};