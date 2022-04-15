import ContentHeader from '../../components/ContentHeader'
import { Container } from './style'
import SelectInput from '../../components/SelectInput'

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'Wagner',
      label: 'Dev',
    },
    {
      value: 'Wagner',
      label: 'Dev',
    },
  ]
  return (
    <>
      <Container>
        <ContentHeader title="Dashboard">
          {/* <SelectInput options={options} /> */}
          {/* <SelectInput options={options} /> */}
        </ContentHeader>
      </Container>
    </>
  )
}
export default Dashboard
