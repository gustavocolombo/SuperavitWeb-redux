import { useEffect, useState } from 'react'
import { Container, ContentWrapper } from './styles'

interface HeaderProps{
  handleOpenModal: () => void
}

export default function Header({handleOpenModal}: HeaderProps){
  const[gretting, setGretting] = useState('');


  useEffect(()=>{
    const date = new Date().getHours();

    if(date >= 12 && date < 18){
      setGretting('Boa tarde!')
    }else if(date < 12){
      setGretting('Bom dia!')
    }else{
      setGretting('Boa noite!')
    }
  },[])

  return(
    <Container>
      <ContentWrapper>
        <h2>Os valores assustam, {gretting}</h2>
        <button onClick={handleOpenModal}>
          Nova transação
        </button>

      </ContentWrapper>
    </Container>
  )
}