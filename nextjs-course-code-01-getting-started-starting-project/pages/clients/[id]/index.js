import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "pra", clientprojectid: "SeatingChart" },
    });
  }

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
