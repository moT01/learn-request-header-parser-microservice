const assert = require('assert');
const fetch = require('node-fetch');

describe('SUBTASKS 1.1', async () => {
  let url = 'http://localhost:8080/';
  
  const codeAllyPort = process.env.CODEALLY_PORT_8080;
  if (codeAllyPort) url = codeAllyPort.replace('silisky.com', 'codeally.io');

  it(':1 A request to "/api/whoami" should return a JSON object with your IP address in the "ipaddress" key', async () => {
    try {
      const response = await fetch(`${url}api/whoami`);
      const data = await response.json();
  
      assert(data.ipaddress && data.ipaddress.length > 0);
    } catch (error) {
      assert(false);
    }
  });

  it(':2 A request to "/api/whoami" should return a JSON object with your preferred language in the "language" key', async () => {
    try {
      const response = await fetch(`${url}api/whoami`);
      const data = await response.json();
  
      assert(data.language && data.language.length > 0);
    } catch (error) {
      assert(false);
    }
  });

  it(':3 A request to "/api/whoami" should return a JSON object with your software in the "software" key', async () => {
    try {
      const response = await fetch(`${url}api/whoami`);
      const data = await response.json();
  
      assert(data.software && data.software.length > 0);
    } catch (error) {
      assert(false);
    }
  });
});
