import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../index";


function Rooms() {

    const Hotels = useStore()

    useEffect(() => {
        Hotels.getHotels()
    }, [])



    return (
        <h1>Rooms</h1>
    )

}

export default observer(Rooms)