import React from 'react'
import './Headpenguin.css'
import pinkclock from '../../assets/pinkclock.svg'
import clock from '../../assets/clock.svg'
import mainticket from '../../assets/mainticket.svg'
import ticket from '../../assets/ticket.svg'
import maintrip from '../../assets/maintrip.svg'
import trip from '../../assets/trip.svg'
import arrival from '../../assets/arrival.svg'
import blackarrow from '../../assets/blackarrow.svg'

const Headpenguin = () => {
  return (
    <div className='headpenguin'>
        <div className="penguincards">
            <div className="cards">
                <div class="topsubcard">
                <img src={pinkclock} alt="" />
                <p>Today Schedule</p>
                </div>

                <div className='subcard'>
                    <img src={clock} alt="" className='subimg' />
                    <p>Open from 10:00am - 3:00pm</p>
                </div>
                <div className='subcard'>
                    <img src={clock} alt=""className='subimg' />
                    <p>Last admission : 2:30pm</p>
                </div>
                <div class="allopening">
                    <button>All opening <img src={blackarrow} alt="" className='arrowimg' /></button>
                </div>
            </div>
            <div className="cards">
                <div class="topsubcard">
                <img src={mainticket} alt="" />
                <p>Purchase Ticket</p>
                </div>
           
                <div className='subcard'>
                    <img src={ticket} alt=""className='subimg'/>
                    <p>In Season - $12 per person </p>
                </div>
                <div className='subcard'>
                    <img src={ticket} alt="" className='subimg' />
                    <p>Off Season - $10 per person </p>
                </div>
                <div class="allopening">
                    <button>Get Ticket<img src={blackarrow} alt="" className='arrowimg' /></button>
                </div>
            </div>
            <div className="cards">
                <div class="topsubcard">
                <img src={maintrip} alt="" />
                <p>Plan your Trip</p>
                </div>
            
                <div className='subcard'>
                    <img src={trip} alt="" className='subimg'/>
                    <p>6 Experience</p>
                </div>
                <div className='subcard'>
                    <img src={trip} alt="" className='subimg'/>
                    <p>20 Attractions</p>
                </div>
                <div class="allopening">
                    <button>Plan Trip<img src={blackarrow} alt="" className='arrowimg' /></button>
                </div>
            </div>
            <div className="cards">
                <div class="topsubcard">
                    <img src={arrival} alt="" />
                    <p>Arrival</p>
                </div>
                
                <div className='subcard'>
                    <img src={trip} alt="" className='subimg'/>
                    <p>Explore Exibit</p>
                </div>
                <div className='subcard'>
                    <img src={clock} alt="" className='subimg'/>
                    <p>Last admission : 2:30pm</p>
                </div>
                <div class="allopening">
                    <button>Get Direction<img src={blackarrow} alt="" className='arrowimg' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headpenguin