export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

var gNum = 110 

function makeId() {
    var num = gNum++
    var txt = 'e'+ num;
    return txt;
}