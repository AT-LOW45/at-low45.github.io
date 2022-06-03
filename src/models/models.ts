interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
	tags?: Array<string>;
	source: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
	featured: Product;
	datePosted: Date;
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

export type { Product, Post, Feedback, FAQ };
