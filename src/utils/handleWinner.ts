import { useList } from '../hooks/useList'
import { IData } from '../types/types'

export function handleWinner() {
  const { getList } = useList()
  function userWinner(): IData | undefined {
    const data = getList()

    if (!data) return undefined

    function getRandomNumber() {
      return Math.floor(Math.random() * (100 - 1))
    }

    let randomNum = getRandomNumber()

    while (!data[randomNum]) randomNum = getRandomNumber()

    return data[randomNum]
  }

  return { userWinner }
}
