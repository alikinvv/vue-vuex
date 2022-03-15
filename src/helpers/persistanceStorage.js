export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log('Parse error from localStorage.getItem', e);
        return null;
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.log('Parse error from localStorage.setItem', e);
        return null;
    }
}