import ContentHeader from "../../components/ContentHeader";
import { Container } from "./style";
import SelectInput from "../../components/SelectInput";
import HistoryFinancialCard from "../../components/HistoryFinancialCard";
const List: React.FC = () => {
  const options = [
    {
      value: "Wagner",
      label: "Dev"
    },
    {
      value: "Wagner",
      label: "Dev"
    }
  ];
  return (
    <>
      <Container>
        <ContentHeader title="Dashboard">
          <SelectInput options={options} />
          <SelectInput options={options} />
        </ContentHeader>

        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
        <HistoryFinancialCard
          cardColor="#abeafe"
          tagColor="red"
          title="conta água"
          subtitle="28/08/02"
          amount="R$ 150.00"
        />
      </Container>
    </>
  );
};
export default List;
