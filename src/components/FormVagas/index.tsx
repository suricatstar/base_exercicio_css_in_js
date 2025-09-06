import {
  FormEvent,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const Campo = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  padding: 8px;
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: var(--cor-principal);
  }
`

const BtnPesquisar = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  border-radius: 8px;
  cursor: pointer;
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <form onSubmit={aoEnviarForm}>
      <FormContainer>
        <Campo
          placeholder="Front-end, fullstack, node, design"
          onChange={handleInputChange}
          type="search"
          value={termo}
        />
        <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
      </FormContainer>
    </form>
  )
}

export default FormVagas
