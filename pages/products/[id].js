import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { Container, Spinner } from "react-bootstrap";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";

export default function ProductDetails({ product: initialProduct }) {
	const router = useRouter();
	const [product, setProduct] = useState(initialProduct);
	const [loading, setLoading] = useState(!initialProduct); 
	console.log("🚀 ~ ProductDetails ~ loading:", loading)

	useEffect(() => {
	
		if (!initialProduct && router.query.id) {
			setLoading(true);
			axios
				.get(`https://fakestoreapi.com/products/${router.query.id}`)
				.then((response) => {
					setProduct(response.data);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching product:", error);
					setLoading(false);
				});
		}
	}, [initialProduct, router.query.id]);

	if (loading) {
		return (
			<Container fluid className="text-center mt-5">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
				<p>Loading product details...</p>
			</Container>
		);
	}

	if (!product) {
		return (
			<Container fluid className="text-center mt-5">
				<p>Product not found.</p>
			</Container>
		);
	}

	return (
		<Container fluid className="text-center">
			<ProductCard
				category={product.category}
				product={product}
				productStyle={{ height: "200px", width: "100%" }}
				imageStyle={{ height: "400px" }}
			/>
		</Container>
	);
}

export async function getServerSideProps({ params }) {
	try {
		const res = await axios.get(
			`https://fakestoreapi.com/products/${params.id}`
		);
		const product = res.data;
		return {
			props: { product },
		};
	} catch (error) {
		console.error("Error fetching product in getServerSideProps:", error);
		return {
			props: { product: null }, // Return null if product is not found
		};
	}
}
