import HttpHandler from './handlers/http.handler';

const baseRoute = '/athletes';

const get = async (params = {}) => {
  const uriParams = HttpHandler.queryStringBuilder(params);
  const qs = uriParams ? `?${uriParams}` : '';

  return HttpHandler.request(`${baseRoute}${qs}`, 'GET');
}
export default {
  get,
};
