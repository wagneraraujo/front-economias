import { Container, Title, Controller } from "./style";


interface IContentHeaderProps {
  title: string;
  children: React.ReactNode;
}



const ContentHeader: React.FC<IContentHeaderProps> = ({title, children}) => {

  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>

      <Controller>
        {children}
      </Controller>
    </Container>
  );
};

export default ContentHeader;
