import { CardType } from "../models/constants";

interface CardProps<T> {
	headRequired?: boolean;
	footerRequired?: boolean;
	data?: T;
	type: CardType;
	additionalClasses?: Array<string>;
	renderHead?: (card: T) => React.ReactNode;
	renderBody: (card: T) => React.ReactNode;
	renderFooter?: (card: T) => React.ReactNode;
}

const Card = <T extends unknown>({
	type,
	data,
	footerRequired,
	headRequired,
	additionalClasses,
	renderHead,
	renderBody,
	renderFooter,
}: CardProps<T>) => {
	return (
		<div className={`Card ${type} ${additionalClasses?.join(" ")}`}>
			{headRequired && (
				<div className='card-header'>{renderHead!(data!)}</div>
			)}

			<div className='card-body'>{renderBody(data!)}</div>

			{footerRequired && (
				<div className='card-footer'>{renderFooter!(data!)}</div>
			)}
		</div>
	);
};

export default Card;
