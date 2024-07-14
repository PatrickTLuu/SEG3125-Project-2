export const partitionInto4 = (list) => {
    var lists = [[], [], [], [], []];
    var index = 0;

    list.forEach((item) => {
        lists.at(index).push(item);
        if (index === 4) {
            index = 0;
        } else {
            index++;
        }
    });

    return lists;
}