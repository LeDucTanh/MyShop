const register = (email, name, password) => (
    // eslint-disable-next-line no-undef
    fetch('http://localhost/api/register.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    }).then(res => 
        res.text()
    )
);

export default register;
