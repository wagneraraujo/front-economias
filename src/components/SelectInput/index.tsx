import {Container} from "./style"


interface ISelectInputsProps {
  options:{
    value:string | number;
    label: string | number;
  }[],

    
}

const SelectInput: React.FC<ISelectInputsProps> = ({options}) => {

  return(
    <>
      <Container>

        <select name="" id="">
          
          {
            options.map(option => (

              <option value={option.value}>{option.label}</option>
            ))

          }

        </select>

      </Container>
    </>
  )
}


export default SelectInput
