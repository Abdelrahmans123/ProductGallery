import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((res) => {
			setProducts(res.data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<Container fluid className="text-center mt-5">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
				<p>Loading products...</p>
			</Container>
		);
	}
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">Products Gallery</h1>
			<input
				type="text"
				placeholder="Search products..."
				className="w-full p-2 border rounded mb-6"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			<Container>
				<Row>
					{(searchTerm ? filteredProducts : products).map((product) => (
						<Col key={product.id} md={4} sm={12} className="mb-2 mt-2">
							<ProductCard
								product={product}
								imageStyle={{ height: "200px", objectFit: "cover" }}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

