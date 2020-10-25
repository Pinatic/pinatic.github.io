import axios from 'axios'

import SteamProfileMap from './SteamProfiles';

export default class API {
    static endpoint = "https://pinatic-api.herokuapp.com/"

    static getProfileInfo(id, callback) {
        axios.get(API.endpoint + 'summary/' + SteamProfileMap(id)).then(res => callback(res.data))
    }

    static getOwnedGames(id, callback) {
        axios.get(API.endpoint + 'owned-games/' + SteamProfileMap(id)).then(res => callback(res.data.response))
    }

    static GetFriends(id, callback) {
        axios.get(API.endpoint + 'friends/' + SteamProfileMap(id)).then(res => callback(res.data))
    }

    static GetResentGames(id, callback) {
        axios.get(API.endpoint + 'resent-games/' + SteamProfileMap(id)).then(res => callback(res.data.response.games))
    }

    static GetGameAchievements(gameId, callback) {
        axios.get(API.endpoint + 'achievements/' + gameId).then(res => callback(res.data))
    }

    static GetPlayerAchievements(id, gameId, callback) {
        axios.get(API.endpoint + 'stats/' + SteamProfileMap(id) + '/' + gameId).then(res => callback(res.data))
    }
}