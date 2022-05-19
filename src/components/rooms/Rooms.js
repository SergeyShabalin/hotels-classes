import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../index";


import './Rooms.css'

function Rooms() {

    const Hotels = useStore()

    useEffect(() => {
        Hotels.getHotels()
    }, [])


    const a = Hotels.hotels.map(item => {
            return (


                <div key={item.id} className='grid-item'>
                    <img className='image' src={item.img}/>
                    <div className='header'>
                        <div className='title'>
                            {item.name}
                        </div>
                    </div>

                    <div className='properties'>
                        <div className='property'>
                            {/*<FaUserFriends className='icon'/>*/}
                            <div className='prorerty-label'>
                                До {item.numberOfSeats} мест
                            </div>
                        </div>
                        <div className='property'>
                            {/*<RiHome3Line className='icon'/>*/}
                            <div className='prorerty-label'>
                                Комната {item.number}
                            </div>
                        </div>
                        <div className='property'>
                            {/*<AiOutlineExpandAlt className='icon'/>*/}
                            <div className='prorerty-label'>
                                {item.area} кв.м
                            </div>
                        </div>
                    </div>
                    <div className='price-field'>
                        <div className='property-price'>
                            {/*<BsCurrencyExchange className='icon_price'/>*/}
                            <div className='price-label'>{item.price}</div>
                                {/*<BiRuble className='icon'/></div>*/}
                        </div>
                        <div className='property-price'>
                            <div
                                 onClick={Hotels.funk}
                                type="button" className="btn">Забронировать
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    )


    return (
        <div>{a}</div>
    )

}

export default observer(Rooms)