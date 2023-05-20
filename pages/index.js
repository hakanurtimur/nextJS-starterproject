import React, { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetup Application</title>
        <meta name= 'description' content="Awesome react application!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
  const client = await MongoClient.connect(
    "mongodb+srv://hakanurtimur:34350q@cluster0.9ouy84u.mongodb.net/meetups?retryWrites=true&w=majority"
  ); // şifre ve kullnıcı adı

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close;
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 3600,
  };
}
