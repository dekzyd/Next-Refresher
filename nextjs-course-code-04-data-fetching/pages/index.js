import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { product } = props;
  return (
    <ul>
      {product.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // load dummy-backend.json data without fetching on CS
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      product: data.products,
    },
  };
}

export default HomePage;
