import english from "../data/english.json"
import french from "../data/francais.json"


export const getText = (page, component) => {
    if (localStorage.getItem("language") === "FR") {
        return french[page][component];
    } else {
        return english[page][component];
    }
}