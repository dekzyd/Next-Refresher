import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Find great events around you." />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
