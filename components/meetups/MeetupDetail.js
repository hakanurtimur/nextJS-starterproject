import React from "react";
import classes from './MeetupDetails.module.css'

function MeetupDetail(props) {

    return ( <section className={classes.details}>
    <img  src={props.image} alt='meetup'/>
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
</section> )
}

export default MeetupDetail;