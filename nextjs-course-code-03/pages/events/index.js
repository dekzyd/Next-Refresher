import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  }
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find great events around you." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: { events: events },
    revalidate: 60,
  };
}
