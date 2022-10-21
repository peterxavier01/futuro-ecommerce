import React from "react";

import HeroOne from "./public/pic5.jpg";
import HeroTwo from "./public/pic8.jpg";
import HeroThree from "./public/pic2.jpg";

import FeaturedOne from "./public/pic11.jpg";
import FeaturedTwo from "./public/pic17.jpg";
import FeaturedThree from "./public/pic1.jpg";
import FeaturedFour from "./public/pic15.jpg";

import LatestOne from "./public/pic.jpg";
import LatestTwo from "./public/pic3.jpg";
import LatestThree from "./public/pic4.jpg";
import LatestFour from "./public/pic6.jpg";
import LatestFive from "./public/pic7.jpg";
import LatestSix from "./public/pic9.jpg";

import TrendingOne from "./public/pic16.jpg";
import TrendingTwo from "./public/pic14.jpg";
import TrendingThree from "./public/pic12.jpg";
import TrendingFour from "./public/pic18.jpg";

import StackOne from "./public/watch_1.webp";
import StackTwo from "./public/watch_2.webp";
import StackThree from "./public/watch_3.webp";

import TopOne from "./public/pic20.png";
import TopTwo from "./public/pic23.png";
import TopThree from "./public/pic13.png";
import TopFour from "./public/pic10.png";

import FeaturesOne from "./public/delivery.svg";
import FeaturesTwo from "./public/shield.svg";
import FeaturesThree from "./public/cashback.svg";
import FeaturesFour from "./public/support.svg";

import TestimonialOne from "./public/pic24.jpg";
import TestimonialTwo from "./public/pic25.jpg";
import TestimonialThree from "./public/pic26.jpg";

import { RiDoorOpenLine } from "react-icons/ri";
import { MdOutlineGppGood } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { TbShoppingCartDiscount } from "react-icons/tb";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export const navLinks = [
  { id: 1, title: "Home", path: "/", icon: <AiOutlineHome /> },
  { id: 2, title: "About", path: "/about", icon: <AiOutlineUser /> },
  { id: 3, title: "Contact", path: "/contact", icon: <AiOutlinePhone /> },
  {
    id: 4,
    title: "New",
    path: "/new-product",
    icon: <AiOutlineShoppingCart />,
  },
];

export const heroContent = [
  {
    subtitle: "Best Quality Furniture For Your Mansion...",
    title: "Latest Furniture Collection Trends In 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium",
    src: HeroOne,
    id: 1,
    bgColor: "var(--bg-main)",
  },
  {
    subtitle: "Best Quality Sofa For Your Mansion...",
    title: "Latest Sofa Collection Trends In 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium",
    src: HeroTwo,
    id: 2,
    bgColor: "#a4d4fc",
  },
  {
    subtitle: "Best Quality Lamp For Your Mansion...",
    title: "Latest Lamp Collection Trends In 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium",
    src: HeroThree,
    id: 3,
    bgColor: "#dafca4",
  },
];

export const featuredProducts = [
  {
    id: 1,
    src: FeaturedOne,
    name: "Foldable Chair",
    code: "D28393",
    price: "$55.90",
  },
  {
    id: 2,
    src: FeaturedTwo,
    name: "Flexible Lamp",
    code: "G83933",
    price: "$52.00",
  },
  {
    id: 3,
    src: FeaturedThree,
    name: "Comfy Sofa",
    code: "B28393",
    price: "$49.99",
  },
  {
    id: 4,
    src: FeaturedFour,
    name: "Reading Chair",
    code: "Z18393",
    price: "$50.99",
  },
];

export const latestProducts = [
  {
    id: 1,
    src: LatestOne,
    name: "Foldable Chair",
    slashPrice: "$67.00",
    price: "$55.90",
  },
  {
    id: 2,
    src: LatestTwo,
    name: "Flexible Lamp",
    slashPrice: "$97.00",
    price: "$52.00",
  },
  {
    id: 3,
    src: LatestThree,
    name: "Comfy Sofa",
    slashPrice: "$73.99",
    price: "$49.99",
  },
  {
    id: 4,
    src: LatestFour,
    name: "Reading Chair",
    slashPrice: "$60.82",
    price: "$39.99",
  },
  {
    id: 5,
    src: LatestFive,
    name: "Flexible Lamp",
    slashPrice: "$72.99",
    price: "$60.99",
  },
  {
    id: 6,
    src: LatestSix,
    name: "Comfy Sofa",
    slashPrice: "$09.88",
    price: "$48.99",
  },
];

export const offers = [
  {
    id: 1,
    icon: <RiDoorOpenLine />,
    title: "Door Delivery",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt?",
  },
  {
    id: 2,
    icon: <MdOutlineGppGood />,
    title: "100% Quality Goods",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt?",
  },
  {
    id: 3,
    icon: <BsHeadset />,
    title: "24/7 Support",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt?",
  },
  {
    id: 4,
    icon: <TbShoppingCartDiscount />,
    title: "Excellent Discounts",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt?",
  },
];

export const uniqueFeatures = [
  { id: 1, bgColor: "red", text: "Lorem ipsum dolor sit amet consectetur" },
  { id: 2, bgColor: "green", text: "Lorem ipsum dolor sit amet consectetur" },
  { id: 3, bgColor: "blue", text: "Lorem ipsum dolor sit amet consectetur" },
];

export const trendingProducts = [
  {
    id: 1,
    src: TrendingOne,
    title: "Cantilever Chair",
    price: "$55.32",
    slashPrice: "$70.99",
  },

  {
    id: 2,
    src: TrendingTwo,
    title: "Comfy Sofa",
    price: "$72.99",
    slashPrice: "$90.00",
  },

  {
    id: 3,
    src: TrendingThree,
    title: "Cantilever Chair",
    price: "$45.99",
    slashPrice: "$62.00",
  },

  {
    id: 4,
    src: TrendingFour,
    title: "Comfy Sofa",
    price: "$63.00",
    slashPrice: "$89.99",
  },
];

export const productStack = [
  { id: 1, title: "Men's watch", src: StackOne },
  { id: 2, title: "Men's watch", src: StackTwo },
  { id: 3, title: "Men's watch", src: StackThree },
];

export const tabFeatures = [
  { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing" },
  { id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing" },
  { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing" },
  { id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing" },
];

export const topProducts = [
  { id: 1, src: TopOne, title: "Comfy Sofas", price: "$35.00" },
  { id: 2, src: TopTwo, title: "Slick Watches", price: "$43.99" },
  { id: 3, src: TopThree, title: "Illuminating Lamps", price: "$28.00" },
  { id: 4, src: TopFour, title: "Sturdy Chairs", price: "$30.99" },
  { id: 5, src: StackOne, title: "Comfy Sofas", price: "$70.99" },
  { id: 6, src: StackTwo, title: "Slick Watches", price: "$38.00" },
  { id: 7, src: StackThree, title: "Illuminating Lamps", price: "$73.93" },
  { id: 8, src: LatestFour, title: "Sturdy Chairs", price: "$89.33" },
];

export const ourFeatures = [
  {
    id: 1,
    title: "Free delivery",
    icon: FeaturesOne,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "100% cash back",
    icon: FeaturesThree,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "quality product",
    icon: FeaturesTwo,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "24/7 support",
    icon: FeaturesFour,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const testimonials = [
  {
    id: 1,
    src: TestimonialThree,
    name: "Luke Stanley",
    position: "CEO at Swist Ltd",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde molestiae voluptates ut eligendi aperiam?",
  },
  {
    id: 2,
    src: TestimonialTwo,
    name: "Kane Stone",
    position: "CEO at Dynamo Ltd",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde molestiae voluptates ut eligendi aperiam?",
  },
  {
    id: 3,
    src: TestimonialOne,
    name: "Emma Gray",
    position: "CEO at Kambe Ltd",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde molestiae voluptates ut eligendi aperiam?",
  },
];

export const contactInfo = [
  {
    id: 1,
    bgColor: "coral",
    textOne: "Tel: +234 907 4789 2393",
    textTwo: "E-mail: futuro@store.com",
  },
  {
    id: 2,
    bgColor: "blue",
    textOne: "Support Forum",
    textTwo: "For over 24 hours",
  },
  {
    id: 3,
    bgColor: "teal",
    textOne: "Free standard shipping",
    textTwo: "available on all orders",
  },
  {
    id: 4,
    bgColor: "grey",
    textOne: "24, RichSon Avenue",
    textTwo: "Lagos, Nigeria",
  },
];

export const relatedProducts = [
  { id: 1, name: "Mens fashion wear", price: "$44.99", src: LatestOne },
  { id: 2, name: "illuminating lamp", price: "$32.00", src: LatestTwo },
  { id: 3, name: "comfy reading table", price: "$43.99", src: LatestThree },
  {
    id: 4,
    name: "relaxing cantilever chair",
    price: "$48.00",
    src: LatestFour,
  },
  { id: 5, name: "Illuminating lamp", price: "$34.99", src: LatestFive },
  { id: 6, name: "Comfy Reading Table", price: "$50.00", src: LatestSix },
];

export const cartItems = [
  {
    id: 1,
    name: "Comfy Reading Table",
    price: "$50.00",
    src: LatestTwo,
    color: "Blue",
    size: "xl",
  },
  {
    id: 2,
    name: "Cantilever chair",
    price: "$56.00",
    src: FeaturedTwo,
    color: "blue",
    size: "l",
  },
  {
    id: 3,
    name: "body-fitted t-shirt",
    price: "$25.00",
    src: HeroTwo,
    color: "white",
    size: "xxl",
  },
  {
    id: 4,
    name: "Reading lamp",
    price: "$40.00",
    src: LatestSix,
    color: "Blue",
    size: "xl",
  },
  {
    id: 5,
    name: "Comfy Sofa",
    price: "$74.99",
    src: FeaturedOne,
    color: "gray",
    size: "xxl",
  },
];
