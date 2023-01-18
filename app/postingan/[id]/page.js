import Image from "next/image";
async function getDetailPostingan(id) {
  let detailPostingan = await fetch(`https://dummyjson.com/products/${id}`);
  return detailPostingan.json();
}

export default async function Page({ params }) {
  const detail = await getDetailPostingan(params.id);
  console.log({ detailProduct: detail });
  return (
    <div>
      <Image src={detail.thumbnail} width="400" height="400"></Image>
      <p>Brand: {detail.brand}</p>
      <p>Type: {detail.title}</p>
      <p>Category: {detail.category}</p>
      <p>Rating: {detail.rating}</p>
      <p>Stock: {detail.stock}</p>
      <p>Price: {detail.price}</p>
      <p>Description: {detail.description}</p>
    </div>
  );
}
