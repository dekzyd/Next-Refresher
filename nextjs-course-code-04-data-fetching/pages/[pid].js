import { fragment } from "react";
import fs from "fs/promises";
import path from "path";

function productDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  // load dummy-backend.json data without fetching on CS
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          pid: "p1",
        },
      },
      {
        params: {
          pid: "p2",
        },
      },
      {
        params: {
          pid: "p3",
        },
      },
    ],
    fallback: false,
  };
}

export default productDetailPage;
