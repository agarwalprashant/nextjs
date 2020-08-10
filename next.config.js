const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        baseURL: 'http://39197183bf83.ngrok.io',
        fetchURL: 'http://52.66.237.36:8183',
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      baseURL: 'https://api.mitron.tv',
      fetchURL: 'http://52.66.237.36:8183',
    },
  };
};
