import { useRouter } from "next/router";

export default function EventDetailPage() {
  const router = useRouter();
  console.log(router.pathname);

  console.log(router.query.eventId);
  return (
    <div>
      <h1>Event Page {router.query.eventId}</h1>
    </div>
  );
}
