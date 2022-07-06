import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const router = useRouter();

  async function addNewItemHandler(item) {
    const response = await fetch("/api/new", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });

    const resJSON = await response.json();
    router.push("/");
    console.log(resJSON);

    // const res = await fetch("/api/new", { method: "POST" });
    // console.log(res);
  }
  return (
    <>
      <Head>
        <title>Adding new Meetup </title>
        <meta
          name="description"
          content="You can save new meetup online mongodb"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addNewItemHandler} />;
    </>
  );
}
