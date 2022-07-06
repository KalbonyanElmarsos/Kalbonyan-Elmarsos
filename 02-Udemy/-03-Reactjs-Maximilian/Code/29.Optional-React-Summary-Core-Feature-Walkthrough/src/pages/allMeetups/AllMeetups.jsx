import React, { useEffect, useState } from "react";
import MeetupList from "../../components/mettups/meetupList/MeetupList";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-demo-37e14-default-rtdb.firebaseio.com/meetups29.json")
      .then((res) => res.json())
      .then((resJSON) => {
        const meetupsArr = [];
        console.log(resJSON);
        for (const key in resJSON) {
          meetupsArr.push({ id: key, ...resJSON[key] });
        }
        setIsLoading(false);
        setMeetups(meetupsArr);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <section>Loading...</section>;
  }
  return (
    <div>
      <h1>AllMeetups</h1>
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetups;
