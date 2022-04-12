import ContentHeader from '../../components/ContentHeader'
import { Container, Filters } from './style'
import SelectInput from '../../components/SelectInput'
import HistoryFinancialCard from '../../components/HistoryFinancialCard'
import Content from '../../components/Content'
const List: React.FC = () => {
  const months = [
    {
      value: 1,
      label: 'Janeiro',
    },
    {
      value: 2,
      label: 'Favereiro',
    },
  ]

  const years = [
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2022,
      label: 2022,
    },
  ]
  return (
    <>
      <Container>
        <ContentHeader title="Dashboard">
          <SelectInput options={months} />
          <SelectInput options={years} />
        </ContentHeader>

        <Filters>
          <button type="button" className="tag-filter tag-current">
            Recorrentes
          </button>
          <button type="button" className="tag-filter tag-eventual">
            Eventual
          </button>
        </Filters>
        <Content>
          <HistoryFinancialCard
            cardColor="#abeafe"
            tagColor="red"
            title="conta água"
            subtitle="28/08/02"
            amount="R$ 150.00"
          />
        </Content>
      </Container>
    </>
  )
}
export default List
