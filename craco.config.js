// module.exports = {
//   webpack: {
//     configure: {
//       module: {
//         rules: [
//           {
//             test: /\.m?js$/,
//             resolve: {
//               fullySpecified: false
//             }
//           }
//         ]
//       }
//     }
//   }
// };
// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Handle module resolution issues
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // Add fallbacks for Node.js modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        process: false,
      };

      return webpackConfig;
    },
  },
};
