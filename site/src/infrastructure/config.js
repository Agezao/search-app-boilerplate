const env = window.location.host.includes('localhost:') ? 'local' : 'prod';

export default {
  apiUrl: env === 'local' ? 'http://localhost:8080/api' : '/api',
  baseToastr: {
    position: "top-right",
    duration: 4000,
    isClosable: true,
  }
};
