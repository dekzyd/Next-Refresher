import { fragment } from "react";
import fs from "fs/promises";
import path from "path";

function productDetailPage(props) {
  const { loadedProduct } = props;

  // dynamic pre-rendering fallback. when fallback=blocking it's not needed but page takes longer loading time
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </fragment>
  );
}

async function getData() {
  // load dummy-backend.json data without fetching on CS
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  // if no product 'pid=p4'
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// dynamic pre-rendering
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    fallback: true,
    // fallback: "blocking",
  };
}

export default productDetailPage;
