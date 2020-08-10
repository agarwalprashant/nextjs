const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        baseURL: 'https://nextjs-theta-nine.vercel.app',
        shareURL: 'http://52.66.237.36:8183/v1/shareUrl',
        fetchURL: 'http://52.66.237.36:8183',
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      // baseURL: 'https://nextjs-theta-nine.vercel.app',

      shareURL: 'http://52.66.237.36:8183/v1/shareUrl',
      fetchURL: 'http://52.66.237.36:8183',

      // fetchURL: 'https://api.mitron.tv',
      // shareURL: 'https://api.mitron.tv:443/v1/shareUrl',
    },
  };
};
