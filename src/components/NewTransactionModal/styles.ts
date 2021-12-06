import styled from "styled-components";

export const Container = styled.form`
  display: flex ;
  align-items: center;
  flex-direction: column;

  h2{
    margin-bottom: 1rem;
  }

  input{
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 0.3rem;

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    margin-top: 1rem;
    color: #fff;
    background: var(--blue);
    padding: 1rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 0.3rem;
    border: 0;
    transition: 0.3s;

    &:hover{
      filter: brightness(0.7);
    }
  }
`