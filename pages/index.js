import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { img } from "../components/img";


export default function HomePage() {
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
  return (

      <MeetupList meetups={DUMMY_MEETUPS} />
    
  );
}
