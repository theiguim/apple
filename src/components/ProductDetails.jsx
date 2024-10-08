"use client"

import { Button, Col, Row } from "reactstrap";
import SucessToast from "./SucessToast";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";


const ProductDetails = ({ product }) => {

    const [toastIsOpen, setToastIsOpen] = useState(false);
    const {addProduct} = useCart();

    return (
        <Row>
            <Col lg={6}>
                <Image
                className="img-fluid"
                    src={product.imageUrl}
                    alt={product.name}
                    height={500}
                    width={600}
                />
            </Col>

            <Col lg={6}>
                <h1>{product.name}</h1>
                <h2 className="text-muted">${product.price}</h2>
                <p className="my-3">
                    <span className="d-block font-weight-bold">Descrição:</span>
                    {product.description}
                </p>
                <p className="text-muted">Em estoque: {product.inStock}</p>

                <Button
                    color="dark"
                    className="my-3 pb-2"
                    onClick={() => {
                        addProduct(product);
                        setToastIsOpen(true);
                        setTimeout(() => setToastIsOpen(false), 1000 * 3);
                    }}
                >
                    Compre agora
                </Button>
                <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
            </Col>
        </Row>
    );
};

export default ProductDetails;