import styled from 'styled-components'
import { useMst } from '../store'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function PageHome() {
  const { applicationStore } = useMst()
  const fullDate = `${applicationStore.currentDate.toLocaleDateString('de', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`

  return (
    <>
      <Title>Hallo! Heute ist {fullDate}.</Title>
    </>
  )
}
