import { Fragment, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import NewTransactionModal from "./components/NewTransactionModal";

function App() {
  const[modalNewTransactionIsOpen, setModalNewTransactionIsOpen] = useState(false);

  function handleOpenModal(){
    setModalNewTransactionIsOpen(true)
  }

  function handleCloseModal(){
    setModalNewTransactionIsOpen(false)
  }

  return (
    <Fragment>
      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={modalNewTransactionIsOpen} 
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
