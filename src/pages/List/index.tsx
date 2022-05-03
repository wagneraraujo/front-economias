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
import listOfMonths from '../../utils/months'
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
  const [selectedFrequency, setSelectedFrequency] = React.useState([
    'recorrente',
    'eventual',
  ])
  const [monthSelected, setMonthSelect] = React.useState<string>(
    String(new Date().getMonth() + 1),
  )
  const [yearSelected, setYearSelect] = React.useState<string>('')

  let { type } = useParams()
  const title = React.useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  }, [type])
  const listData = React.useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

  React.useEffect(() => {
    const response = listData.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      )
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
  }, [monthSelected, yearSelected, data.length, listData, selectedFrequency])

  //apenas anos que existe
  const year = React.useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })
    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [listData])

  const months = React.useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const handleFrequencyclick = (frequency: string) => {
    const alredSelected = selectedFrequency.findIndex(
      (item) => item === frequency,
    )
    if (alredSelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prev) => [...prev, frequency])
    }
  }
  console.log('memmasmfas=>', { monthSelected, yearSelected })
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
            options={year}
            defaultValue={yearSelected}
            onChange={(e: any) => setYearSelect(e.target.value)}
          />
        </ContentHeader>

        <Filters>
          <button
            type="button"
            className="tag-filter tag-current"
            onClick={() => handleFrequencyclick('recorrente')}
          >
            Recorrentes
          </button>
          <button
            type="button"
            className="tag-filter tag-eventual"
            onClick={() => handleFrequencyclick('eventual')}
          >
            Eventual
          </button>
        </Filters>
        <Content>
          {data?.map((item, i) => {
            console.log(data)
            return (
              <HistoryFinancialCard
                key={i}
                cardColor="#d8e0e7"
                tagColor={
                  item.frequency === 'recorrente' ? '#0880c5' : '#ffbd07'
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
