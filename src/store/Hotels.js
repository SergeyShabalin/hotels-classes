import {makeAutoObservable} from "mobx";
import axios from "axios";

class RootStore {
    constructor() {
        this.hotel = new Hotels()
        this.roomes = new Room()
    }
}

class Hotels {
    _hotels = []
    rootStore
    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    get hotels() {
        return this._hotels
    }

    set hotels(value) {
        this._hotels = value
    }


    getHotels() {
        axios.get(' http://localhost:5000/hotel').then((response) => {
            this.hotels = response.data
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}

class Room {
    room = 'sas'

    constructor() {

    }

    getRoom() {
        // this.hotels.map(item => {
        console.log(this.room)
        // })
        // return this.room
    }
}

export default new RootStore()


