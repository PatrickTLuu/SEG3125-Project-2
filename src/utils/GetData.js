import Tournaments from "../data/tournaments.json"
import Trades from "../data/trades.json"

export const getNextTournamentId = () => {
    if (localStorage.getItem("tournaments") == null) {
        return 100;
    } else {
        const localTournaments = JSON.parse(localStorage.getItem("tournaments") || "[]");
        return localTournaments.at(-1).id + 1;
    }
}

export const getTournament = (id) => {
    if (id < 100) {
        return Tournaments.find(entry => entry.id === id);
    } else {
        const localTournaments = JSON.parse(localStorage.getItem("tournaments") || "[]");
        return localTournaments.at(id - 100);
    }
}

export const getAllTournaments = () => {
    const localTournaments = JSON.parse(localStorage.getItem("tournaments") || "[]");
    return Tournaments.concat(localTournaments);
}

export const getNextTradeId = () => {
    if (localStorage.getItem("trades") == null) {
        return 100;
    } else {
        const localTrades = JSON.parse(localStorage.getItem("trades") || "[]");
        return localTrades.at(-1).id + 1;
    }
}

export const getTrade = (id) => {
    if (id < 100) {
        return Trades.find(entry => entry.id === id);
    } else {
        const localTrades = JSON.parse(localStorage.getItem("trades") || "[]");
        return localTrades.at(id - 100);
    }
}

export const getAllTrades = () => {
    const localTrades = JSON.parse(localStorage.getItem("trades") || "[]");
    return Trades.concat(localTrades);
}