import styled from 'styled-components'
import { useMst } from '../store'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function PageHome() {
  const { applicationStore } = useMst()

  return (
    <>
      <Title>
        Hallo! Heute ist {applicationStore.formattedDate}.{' '}
        <button onClick={() => applicationStore.increaseByOneDay()}>
          Add a day
        </button>
      </Title>
    </>
  )
}
