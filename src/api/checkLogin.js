const checkLogin = (token) => (
    // eslint-disable-next-line no-undef
    fetch('http://localhost/api/check_login.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    }).then(res =>
        res.json()
    )
);

export default checkLogin;
