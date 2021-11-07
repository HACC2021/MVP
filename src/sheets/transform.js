/*
    Transforms the form responses to be of a more readable form.
*/

function transformList(list) {
    if (list.length <= 1) return [];
    const headers = list.shift(); // Headers are the first element

    for (let i = 0; i < list.length; i++) {
        const values = list[i];
        const newObj = {};
        for (let j = 0; j < headers.length; j++) {
            newObj[headers[j]] = values[j];
        }
        console.log(newObj);
        list[i] = newObj;
    }

    return list;
}

module.exports = {
    transformList
};
