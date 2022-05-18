import {makeAutoObservable} from "mobx";
import axios from "axios";

class Hotels {

    constructor() {
        makeAutoObservable(this)
    }

    _hotels = []

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

class Room extends Hotels {
    _room = ''



    getRoom() {
        this._hotels.map(item => {
            console.log(item)
        })
    }

}



export default new Hotels()


