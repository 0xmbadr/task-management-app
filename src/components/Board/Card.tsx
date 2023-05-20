import { ITask } from '../../@types/data';

interface CardProps {
  card: ITask;
}
const Card = ({ card }: CardProps) => {
  return <div>{card.title}</div>;
};

export default Card;
