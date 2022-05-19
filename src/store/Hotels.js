import {makeAutoObservable} from "mobx";
import axios from "axios";

class Hotels {

    _hotels = []

    constructor() {
        makeAutoObservable(this)
         this.room = new Room(this)
    }

    get hotels() {
        return this._hotels
    }

    set hotels(value) {
        this._hotels = value
    }

    funk() {
        console.log('sdfsdfsf')
        return this.room.getRoom()
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

    constructor(room) {
        makeAutoObservable(this)
    }

    getRoom() {
        // this.hotels.map(item => {
            console.log('item')
        // })
        // return this.room
    }
}

export default new Hotels()


