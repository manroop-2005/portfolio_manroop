const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    // Remove specific plugins
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'SomePluginName'
    );

    return config;
  },
}