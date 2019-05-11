const signIn = (email, password) => (
    // eslint-disable-next-line no-undef
    fetch('http://localhost/api/login.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res =>
        res.json()
    )
);

export default signIn;
