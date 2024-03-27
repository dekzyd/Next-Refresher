import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "Oladayo", name: "Dayor" },
    { id: "fer", name: "Ferrell" },
    { id: "sam", name: "Sammy" },
    { id: "pra", name: "Praise" },
  ];
  return (
    <div>
      <h1>The Clients index Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
