const initData = () => (
    // eslint-disable-next-line no-undef
    fetch('http://localhost/api/')
    .then(res => res.json())
);

export default initData;
