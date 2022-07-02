import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import useWindowSize from "../hooks/useWindowSize";
import { CardType } from "../models/constants";
import { ProductLinks, Post } from "../models/models";
import { useData } from "../hooks/useData";

import "swiper/css";
import "swiper/css/navigation";
import "../sass/card.scss";

const productLink: Array<ProductLinks> = [
	{ alt: "Opening Flowers", img: "images/posters/Opening.png", link: "" },
	{
		alt: "Condolence Flowers",
		img: "images/posters/Condolence.png",
		link: "",
	},
];

const Homepage = () => {
	const { width } = useWindowSize();
	const { data, isLoading, fetchError } = useData<Post>("news");

	return (
		<div className='Homepage'>
			<Hero
				background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/homepage_hero.jpeg') no-repeat right"
				backgroundPosition={width! < 1000 ? "center" : "right"}
				backgroundSize={width! < 1000 ? "cover" : "contain"}
				text='Sweet Floral Home'
				isLight
				textAlignment={width! < 1000 ? "center" : "left"}
				subText='test'
			/>

			<section id='newsLinks' className='mt-8 '>
				<h2 className='text-3xl text-left pl-10'>Latest</h2>
				<div
					id='newsContainer'
					className='px-4 pt-6 md:px-28 grid grid-cols-5 gap-5 auto-rows-[minmax(120px,1fr)]'
				>
					{isLoading === false &&
						data.map((news, index) => (
							<Card
								key={index}
								type={CardType.NewsCard}
								data={news}
								additionalClasses={
									index === 0
										? [
												"col-span-5",
												"row-span-2",
												"md:row-span-4",
												"md:col-span-3",
										  ]
										: [
												"col-span-5",
												"row-span-2",
												"md:col-span-2",
										  ]
								}
								renderBody={({
									title,
									content,
									attachment,
								}) => (
									<>
										<div className='card-overlay'>
											<div className='title'>{title}</div>
											<div className='content'>
												{content}
											</div>
										</div>
										<div
											className='body'
											style={{
												backgroundImage: `url(${attachment})`,
											}}
										></div>
									</>
								)}
							/>
						))}
				</div>
			</section>

			<section id='productLinks' className='mt-8 p-10'>
				<h2 className='text-3xl text-left'>Flowers</h2>
				<Swiper
					spaceBetween={20}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},
						500: {
							slidesPerView: 2,
						},
						1000: {
							slidesPerView: 4,
						},
					}}
					autoHeight={true}
					navigation={true}
					modules={[Navigation]}
				>
					{productLink.map((pLink, index) => (
						<SwiperSlide key={index} className='p-5'>
							<Card
								data={pLink}
								type={CardType.ProductLink}
								key={index}
								renderBody={({ img, alt, link }) => (
									<>
										<div>
											<img
												src={`${img}`}
												alt={`${alt}`}
											/>
										</div>
									</>
								)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section className='mt-5' id='aboutUs'>
				<h2 className='text-3xl text-center mb-5'>About Us</h2>
				<div
					id='aboutUsContainer'
					className='columns-1 lg:columns-2 p-10'
				>
					<article className='text-center lg:text-left lg:ml-16 mb-10 lg:mb-0'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Architecto, doloremque!
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas consequuntur quis placeat aspernatur minima ea?
						<br />
						Lorem ipsum dolor sit amet.
					</article>
					<img
						src='images/abt-us.jpeg'
						className='container w-2/4 md:w-[40%] h-auto m-auto'
						alt=''
					/>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
