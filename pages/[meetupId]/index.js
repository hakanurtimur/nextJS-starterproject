import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>The {props.meetupData.title} Meetup Details</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>

      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </Fragment>
  );
}

export default MeetupDetailsPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://hakanurtimur:34350q@cluster0.9ouy84u.mongodb.net/meetups?retryWrites=true&w=majority"
  ); // şifre ve kullnıcı adı

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://hakanurtimur:34350q@cluster0.9ouy84u.mongodb.net/meetups?retryWrites=true&w=majority"
  ); // şifre ve kullnıcı adı

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        image: meetup.image,
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString(),
      },
    },
  };
}
