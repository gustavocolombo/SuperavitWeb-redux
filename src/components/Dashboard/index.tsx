import { Fragment } from "react";
import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";

export default function Dashboard(){
  return(
    <Fragment>
      <Container>
        <Summary/>
        <TransactionsTable/>
      </Container>
    </Fragment>
  )
}