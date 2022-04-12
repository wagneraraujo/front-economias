import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container, Filters } from './style'
import SelectInput from '../../components/SelectInput'
import HistoryFinancialCard from '../../components/HistoryFinancialCard'
import Content from '../../components/Content'
import { useParams } from 'react-router-dom'

//useMemo para memorizar o valor

interface IrouteParamns {
  match: {
    params: {
      type: string
    }
  }
}

const List: React.FC = ({ params }: any) => {
  let { type } = useParams()
  const title = React.useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  }, [type])
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

  console.log(type)
  return (
    <>
      <Container>
        <ContentHeader title={title}>
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
