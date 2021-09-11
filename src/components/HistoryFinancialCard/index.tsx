import { Container, Tag } from "./style";

interface IhistoryFinancialCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinancialCard: React.FC<IhistoryFinancialCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />

      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinancialCard;
