import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  margin-top: 2rem;

  thead{
    text-align: left;
  }

  tbody{
    background: var(--gray-200);
    font-weight: 600;
    padding: 5rem;
    
    td{
      padding: 1rem 1rem;
      border: 0;
      text-align: left;
    }
  }
`