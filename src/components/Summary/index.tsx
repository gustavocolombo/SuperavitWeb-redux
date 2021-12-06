import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useSelector } from "react-redux";
import { State } from '../../store/index'

export default function Summary(){

  const amount = useSelector((state: State)=> state.calculator)

  return(
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ {amount},00</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="saídas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}