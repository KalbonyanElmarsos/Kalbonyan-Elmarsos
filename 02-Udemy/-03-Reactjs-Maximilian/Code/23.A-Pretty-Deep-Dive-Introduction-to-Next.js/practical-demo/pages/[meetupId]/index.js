import React from "react";
import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

export default function Meetup(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>

      <MeetupDetails
        title={props.meetup.title}
        src={props.meetup.image}
        description={props.meetup.description}
        address={props.meetup.address}
        // title={"A First Meetup"}
        // src={
        //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        // }
        // description={"This is a first meetup!"}
        // address={"Some address 5, 12345 Some City"}
      />
    </>
  );
}

export async function getStaticPaths(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    // fallback: false, // means i client used any dynamic route rather than m1, m2 then fire 404 error,,,, if true this means accept any route
    paths: meetups.map((item) => ({
      params: { meetupId: item._id.toString() },
    })),
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const connection = await MongoClient.connect(
    "mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = connection.db();
  const meetUpCollection = db.collection("meetups");

  const targetedMeetup = await meetUpCollection.findOne({
    _id: ObjectId(meetupId),
  });

  return {
    props: {
      meetup: {
        id: targetedMeetup._id.toString(),
        image: targetedMeetup.image,
        title: targetedMeetup.title,
        address: targetedMeetup.address,
        description: targetedMeetup.description,
      },
      // meetup: {
      //   title: "A First Meetup",
      //   src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      //   description: "This is a first meetup!",
      //   address: "Some address 5, 12345 Some City",
      // },
    },
  };
}
