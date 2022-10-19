import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import {
  DiscountItem,
  FeaturedProducts,
  Hero,
  LatestProducts,
  Offer,
  TopCategories,
  TrendingProducts,
  UniqueFeatures,
} from "../components/index";
import { db } from "../utils/firebase";

export default function Home({ products }) {
  return (
    <Container>
      <Head>
        <title>Home | Futuro</title>
      </Head>

      <Hero />
      <FeaturedProducts products={products} />
      <LatestProducts products={products} />
      <Offer products={products} />
      <UniqueFeatures products={products} />
      <TrendingProducts products={products} />
      <DiscountItem products={products} />
      <TopCategories products={products} />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
`;

export async function getServerSideProps() {
  const ref = collection(db, "products");

  const querySnapshot = await getDocs(ref);
  const productList = [];
  querySnapshot.forEach((doc) => {
    return productList.push({ id: doc.id, ...doc.data() });
  });

  const products = JSON.stringify(productList);

  return {
    props: {
      products: products,
    },
  };
}
