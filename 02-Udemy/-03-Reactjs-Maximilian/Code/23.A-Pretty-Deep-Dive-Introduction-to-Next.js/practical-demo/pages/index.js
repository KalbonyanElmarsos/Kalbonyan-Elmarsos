import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// localhost:3000/

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Section 23 (NextJS) </title>
        <meta name="description" content="How nextjs works  section " />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}
//  to fetch data from DB in async way before page rendering (getStaticProps --> name can not changed)
export async function getStaticProps(context) {
  // fetch data from DB for example

  const connection = await MongoClient.connect(
    "mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = connection.db();
  const meetUpCollection = db.collection("meetups");

  const meetups = await meetUpCollection.find().toArray();
  const newMeetups = meetups.map((meetup) => {
    return {
      id: meetup._id.toString(),
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
    };
  });
  connection.close();
  console.log("meetups");
  console.log(newMeetups);
  return {
    // this object accessed from HomePage props
    props: { meetups: newMeetups },
    // props: { meetups: DUMMY_DATA },
    // let server regenerate the page content every 1 second, to be ready for any incoming request with up to date data
    revalidate: 1,
  };
}

// used to update data for every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
// this object accessed from HomePage props
// props: { meetups: DUMMY_DATA } };
// }
