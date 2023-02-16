function storageAvailable() {
    let storage = localStorage
    try {
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e    (storage && storage.length !== 0);
    }
}

