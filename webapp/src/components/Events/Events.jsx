import React from 'react'
import './Events.css'
import eventtime from '../../assets/eventtime.svg'
import event1 from '../../assets/event1.svg'
import event2 from '../../assets/event2.svg'
import event3 from '../../assets/event3.svg'
import learnarrow from '../../assets/learnarrow.svg'

const Events = () => {
  return (
    <div class="mainevent">

    <div class="events">
        <div className="card">
            <img src={event1} alt="" />
            <div className="subcard">
                <p1>May 17 2023</p1>
                <img src={eventtime} alt="" />
                <p2>08:30 pm</p2>
                <p2>10:00 pm</p2>
            </div>
            <h1>Run Wild for the Zoo 5K and Fun run</h1>
            <p>Essex County Turtle Back Zoo partnered with the non-profit Sea Turtle Recovery to help care for sick and injured sea turtles. This partnership has been an ongoing success and </p>
            <div class="learn">
                <p3>Learn more</p3>
                <img src={learnarrow} alt="" />
            </div> 
        </div>
        <div className="card">
            <img src={event2} alt="" />
            <div className="subcard">
                <p1>May 17 2023</p1>
                <img src={eventtime} alt="" />
                <p2>08:30 pm</p2>
                <p2>10:00 pm</p2>
            </div>
            <h1>Welcome back</h1>
            <p>Essex County Turtle Back Zoo partnered with the non-profit Sea Turtle Recovery to help care for sick and injured sea turtles. This partnership has been an ongoing success and  </p>
            <div class="learn">
                <p3>Learn more</p3>
                <img src={learnarrow} alt="" />
            </div>                
        </div>
        <div className="card">
            <img src={event3} alt="" />
            <div className="subcard">
                <p1>May 17 2023</p1>
                <img src={eventtime} alt="" />
                <p2>08:30 pm</p2>
                <p2>10:00 pm</p2>
            </div>
            <h1>Welcome back</h1>
            <p>Essex County Turtle Back Zoo partnered with the non-profit Sea Turtle Recovery to help care for sick and injured sea turtles. This partnership has been an ongoing success and  </p>
            <div class="learn">
                <p3>Learn more</p3>
                <img src={learnarrow} alt="" />
            </div>  
        </div>
        
    </div>
</div>
  )
}

export default Events