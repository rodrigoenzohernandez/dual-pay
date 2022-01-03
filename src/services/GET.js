/**
 * Generic fetch to return data
 * @param {string} baseUrl
 * @param {string} resource For example /bonds
 * @param {object} config   Axios config
 * @returns {config} response
 *
 */

async function GET(baseUrl, resource, config) {
  try {
    const instance = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
    });

    const response = await instance.get(resource, config);

    return response;
  } catch (error) {

    const errorFiled = document.querySelector("#alertWarning");
    const strongWarning = document.querySelector("#strongWarning");

    errorFiled.style =  "visibility: visible; opacity: 1; transition: opacity 3s, visibility 3s;";


    strongWarning.innerText = error;

    return null;
  }
}
