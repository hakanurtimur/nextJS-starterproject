import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { img } from "../components/img";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    address: "Some address 3. street.",
    image: img,
  },
  {
    id: "m2",
    title: "First meetup",
    address: "Some address 4. street.",
    image: img,
  },
  {
    id: "m3",
    title: "First meetup",
    address: "Some address 5. street.",
    image: img,
  },
];
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


// export async function getServerSideProps(context) {

//     const req = context.req
//     const res = context.res
//     //fetch some data 
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }



export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600,
  };
}
