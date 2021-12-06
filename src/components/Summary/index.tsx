import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useSelector } from "react-redux";
import { State } from '../../store/index'

export default function Summary(){

  //estado total
  const amount = useSelector((state: State)=> state.calculator)
  const incomeValue = useSelector((state: State)=> state.income)
  const outcomeValue = useSelector((state: State)=> state.outcome)

  return(
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ {incomeValue},00</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="saídas" />
        </header>
        <strong>R$ {outcomeValue},00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ {amount},00</strong>
      </div>
    </Container>
  )
}