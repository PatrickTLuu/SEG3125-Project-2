export const storeData = (type, data) => {
    const temp = localStorage.getItem(type);
    
    if (temp == null) {
        data.id = 100;
        localStorage.setItem(type, JSON.stringify([data]));
    } else {
        data.id = temp.at(-1).id + 1;
        localStorage.setItem(type, JSON.stringify([...temp, data]));
    }
}