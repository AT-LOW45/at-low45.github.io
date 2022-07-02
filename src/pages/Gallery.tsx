import { FC } from "react";
import { useData } from "../hooks/useData";
import { Product } from "../models/models";
import Card from "../components/Card";
import { CardType } from "../models/constants";

const Gallery: FC = () => {
	const { data } = useData<Product>("/products");

	return (
		<div className='Gallery flex flex-row'>
			<div id='filters'></div>

			<section id='products-grid' className='grid grid-cols-3 p-3 m-2'>
				{data.map((product, index) => (
					<Card
						data={product}
						key={index}
						type={CardType.ProductCard}
						renderBody={({ name }) => (
							<>
								<div></div>
							</>
						)}
					/>
				))}
			</section>
		</div>
	);
};

export default Gallery;
