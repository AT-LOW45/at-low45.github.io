interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
	tags?: Array<string>;
	source: string;
}

interface ProductLinks {
	link: string;
	img: string;
	alt: string
}

interface Post {
	id: number;
	title: string;
	content: string;
	featured?: Product;
	datePosted: Date;
	attachment: string;
	source: string;
}

interface Feedback {
	name?: string;
	feedback: string;
	dateProvided: Date;
}

interface FAQ {
	title: string;
	content: string;
}

interface Search {
    keyword: string,
    result: Product | Post | FAQ | null
}



export type { Product, ProductLinks, Post, Feedback, FAQ, Search };
