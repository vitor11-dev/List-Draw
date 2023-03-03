import { useState } from 'react'
import { IData } from '../types/types'

export function useList() {
  const [data, setData] = useState<IData[]>([])

  function setList(props: IData): void {
    setData([
      ...data,
      {
        number: props.number,
        name: props.name,
      },
    ])

    const BD_DATA = JSON.stringify([...data, props])

    localStorage.setItem('data', BD_DATA)
  }

  function getList(): any | undefined {
    const data = localStorage.getItem('data')

    if (!data) return undefined

    return JSON.parse(data)
  }

  function clear(): void {
    localStorage.clear()
    setData([])
  }

  return { setList, getList, clear }
}
