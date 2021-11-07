async function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('/data')
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject({})); // Empty object on error
    });
}