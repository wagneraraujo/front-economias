import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container, Filters } from './style'
import SelectInput from '../../components/SelectInput'
import HistoryFinancialCard from '../../components/HistoryFinancialCard'
import Content from '../../components/Content'
import { useParams } from 'react-router-dom'
import gains from '../../db/gains'
import expenses from '../../db/expenses'
import { formatCurrency } from '../../utils/formatCurreny'
import { formatDate } from '../../utils/formatDate'
//useMemo para memorizar o valor

interface IrouteParamns {
  match: {
    params: {
      type: string
    }
  }
}

const List: React.FC = ({ params }: any) => {
  const [data, setData] = React.useState<any[]>([])
  const [monthSelected, setMonthSelect] = React.useState<string>(
    String(new Date().getMonth() + 1),
  )
  const [yearSelected, setYearSelect] = React.useState<string>(
    String(new Date().getFullYear()),
  )

  let { type } = useParams()
  const title = React.useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  }, [type])
  const listData = React.useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
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
    {
      value: 3,
      label: 'Março',
    },
    {
      value: 4,
      label: 'Abril',
    },
  ]

  const years = [
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2022,
      label: 2022,
    },
  ]

  React.useEffect(() => {
    const response = listData.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected && year === yearSelected
    })

    const formatedDate = response.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amount: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        data: formatDate(item.date),
        tagcolor: '#f8890a',
      }
    })
    setData(formatedDate)
  }, [monthSelected, yearSelected, data.length, listData])

  // console.log({ monthSelected, yearSelected })
  return (
    <>
      <Container>
        <ContentHeader title={title}>
          <SelectInput
            options={months}
            onChange={(e: any) => setMonthSelect(e.target.value)}
            defaultValue={monthSelected}
          />
          <SelectInput
            options={years}
            defaultValue={yearSelected}
            onChange={(e: any) => setYearSelect(e.target.value)}
          />
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
          {data?.map((item, i) => {
            console.log(item)
            return (
              <HistoryFinancialCard
                key={i}
                cardColor="#d8e0e7"
                tagColor={
                  item.frequency === 'recorrente' ? '#abeafe' : '#c41e08'
                }
                title={item.description}
                subtitle={item.data}
                amount={item.amount}
              />
            )
          })}
        </Content>
      </Container>
    </>
  )
}
export default List
