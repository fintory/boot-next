import { observer } from 'mobx-react-lite'
import { useStore } from 'mobx-store-provider'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const PageHome = () => {
  const { applicationStore } = useStore()

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

export default observer(PageHome)
