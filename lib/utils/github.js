const fetch = require('node-fetch');

const exchangeCodeForToken = (code) => {
    const formData = [
        `client_id=${process.env.GITHUB_CLIENT_ID}`,
        `client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
        `code=${code}`
    ].join('&');

    return fetch(`https://github.com/login/oauth/access_token?${formData}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        }
    })
        .then((res) => res.json())
        .then(({ access_token } ) => access_token);
};
   
module.exports = {
    exchangeCodeForToken
};