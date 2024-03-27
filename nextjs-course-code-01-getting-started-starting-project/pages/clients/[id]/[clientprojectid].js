import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Product Page for a specific project for a selected Clients</h1>
    </div>
  );
}
