import { FormEvent, useState } from 'react'
import { Container } from './styles'
import Modal from 'react-modal'
import { api } from '../../services/api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const[receiver, setReceiver] =  useState('');
  const[amount, setAmount] =  useState(0);
  const[description, setDescription] =  useState('');

  function handleCreateTransaction(event: FormEvent){
    event.preventDefault();
    const data  = {
      receiver, amount, description
    }

    api.post('/transactions', data)
  }

  const dispatch = useDispatch();
  const { incomeAmount, outcomeAmount } = bindActionCreators(actionCreators, dispatch)

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-overlay-transaction"
      className="react-modal-transaction"
    >
     <Container onSubmit={handleCreateTransaction}>
      <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Recebedor" value={receiver} onChange={event => setReceiver(event.target.value)} />
        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />
        <input type="text" placeholder="Descrição" value={description} onChange={event => setDescription(event.target.value)} />
        <button type="submit" onClick={receiver === 'eu' ? ()=> incomeAmount(amount) : ()=> outcomeAmount(amount)}>
          Cadastrar
        </button>
     </Container>
    </Modal>
  )
}

//onClick={receiver === 'eu' ? ()=> incomeAmount(amount) : ()=> outcomeAmount(amount)}