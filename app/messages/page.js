import { unstable_noStore } from "next/cache";
// import {notStore} from "next/cache" // it will be on stable version

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // same as next revalidate

// export const dynamic = "force-dynamic"; // same as cache : "no-cache", it always call the request whenever it hit's

export default async function MessagesPage() {
  // unstable_noStore(); // it will do as dynamic force-dynamic, but it's only for this component
  // const response = await fetch("http://localhost:8080/messages", {
  //   // headers: {
  //   //   'X-ID': 'page',
  //   // },
  //   // cache : "no-cache" // default is force-cache, no caching request
  //   // next: {
  //   //   revalidate: 5, // after 5 seconds it will revalidate
  //   //   tags: ["msg"], // this tags under the hood connected with cached data
  //   // },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
