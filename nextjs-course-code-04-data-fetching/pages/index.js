import fs from "fs/promises";
import path from "path";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

function HomePage(props) {
  const { product } = props;
  return (
    <ul>
      {product.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Regenerating");
  // load dummy-backend.json data without fetching on CS
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
