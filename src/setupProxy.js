const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //스웨거에서 /api앞에 것을 떼서 붙이기
      target: "http://192.168.0.144:5006",
      changeOrigin: true,
    }),
  );
};
