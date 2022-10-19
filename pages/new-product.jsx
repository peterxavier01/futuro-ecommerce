import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { BsUpload } from "react-icons/bs";

import Banner from "../components/Banner";
import { cartItems } from "../data";
import ProductImg from "../public/camera-placeholder.png";
import { fadeInLeft, fadeInRight } from "../utils/animations";
import {
  Container,
  Wrapper,
  Row,
  ColOne,
  ColTwo,
  Product,
  Name,
  Price,
  FormContainer,
  FormWrapper,
  Title,
  ImgContainer,
  Input,
  Select,
  Btn,
  Label,
  InputContainer,
  Category,
} from "../styles/new-product.styles";
import { db, storage } from "../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  serverTimestamp,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { toastStyles } from "./login";
import { toast } from "react-toastify";

const NewProduct = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [products, setProducts] = useState([]);
  const [percent, setPercent] = useState(null);
  const toastId = useRef(null);

  const resetData = () => {
    setData((prev) => {
      prev = null || {};
    });
    setFile("");
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercent(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              if (toastId.current === null) {
                toastId.current = toast("Upload in Progress", {
                  progress: progress,
                });
              } else {
                toast.update(toastId.current, { progress: progress });
              }
              break;
          }
        },
        (error) => {
          toast.error(error.message, toastStyles);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            toast.done(toastId.current);
            toast.success("Upload successful", toastStyles);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProducts(list);
      },
      (error) => {
        toast.error(error.message, toastStyles);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleInput = (e) => {
    const newInput = {
      [e.target.id]: e.target.value,
    };
    setData({ ...data, ...newInput });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      toast.success("Product added successfully", toastStyles);
      resetData();
    } catch (error) {
      toast.error(error.message, toastStyles);
    }
  };

  return (
    <Container>
      <Banner title="New Product" inActiveLink="New product" />
      <Wrapper>
        <Row initial="hidden" whileInView="visible">
          <ColOne className="box-shadow-sm" variants={fadeInLeft}>
            {products &&
              products.map((item) => (
                <Product key={item.id}>
                  <Image src={item.img} width={100} height={70} />
                  <div>
                    <Name>{item.name}</Name>
                    <Price>${item.price}</Price>
                    <Category>{item.category}</Category>
                  </div>
                </Product>
              ))}
          </ColOne>
          <ColTwo className="box-shadow-sm" variants={fadeInRight}>
            <FormContainer>
              <Title>Add New Product</Title>
              <FormWrapper onSubmit={handleAddProduct}>
                <div>
                  <ImgContainer>
                    <Image
                      src={file ? URL.createObjectURL(file) : ProductImg}
                      alt="new product"
                      width={200}
                      height={200}
                    />
                  </ImgContainer>
                  <Input
                    type="file"
                    id="img-upload"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Label htmlFor="img-upload">
                    <BsUpload />
                  </Label>
                </div>
                <div>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Name of Product"
                      required
                      id="name"
                      onChange={handleInput}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Price of Product"
                      required
                      id="price"
                      onChange={handleInput}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Discount Price"
                      id="discPrice"
                      onChange={handleInput}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Voucher Code"
                      id="voucherCode"
                      onChange={handleInput}
                    />
                  </InputContainer>
                  <Select id="size" onChange={handleInput}>
                    <option value="">Size (optional)</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="extra-large">XL</option>
                  </Select>
                  <Select id="color" onChange={handleInput}>
                    <option value="">Color (optional)</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="violet">Violet</option>
                    <option value="white">White</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="beige">Beige</option>
                    <option value="black">Black</option>
                  </Select>
                  <Select id="category" onChange={handleInput}>
                    <option value="">Category</option>
                    <option value="featured">Featured</option>
                    <option value="latest">Latest</option>
                    <option value="unique">Unique</option>
                    <option value="trending">Trending</option>
                    <option value="discount">Discount</option>
                    <option value="top">Top</option>
                  </Select>
                  <Btn
                    type="submit"
                    disabled={percent !== null && percent < 100}
                  >
                    Add
                  </Btn>
                </div>
              </FormWrapper>
            </FormContainer>
          </ColTwo>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default NewProduct;
