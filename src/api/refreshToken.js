import saveToken from './saveToken';

const refreshToken = (token) => (
    // eslint-disable-next-line no-undef
    fetch('http://localhost/api/refresh_token.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    }).then(res => res.text())
        .then(newToken => saveToken(newToken))
);

export default refreshToken;
