export const datePassed = (date, time) => {
    const currentDate = new Date();
    const otherDate = new Date(date + " " + time);
    return currentDate > otherDate;
}