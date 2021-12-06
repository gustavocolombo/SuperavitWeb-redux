import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction{
  id: number;
  amount: number;
  receiver: string;
  description: string;
}

export default function TransactionsTable(){

  const[transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return(
    <Container>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Recebedor</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.receiver}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}