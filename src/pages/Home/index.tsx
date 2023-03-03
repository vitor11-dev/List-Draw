import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from '../../components/List'
import { useList } from '../../hooks/useList'

import './styles.css'

export function Home() {
  const [number, setNumber] = useState<number>(1)
  const [name, setName] = useState<string>('')

  const { setList, clear } = useList()

  function setData(): void {
    setList({ name, number })
    setNumber(number + 1)
    setName('')
  }

  return (
    <div className='container'>
      <List />
      <div className='home-container shadow'>
        <h1>Por favor insira os dados</h1>
        <form
          onSubmit={(event: FormEvent) => {
            event.preventDefault()
            setData()
          }}
        >
          <div className='form-group'>
            <label htmlFor='number'>Número:</label>
            <input
              type='number'
              name='number'
              required
              value={number}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setNumber(Number(event.target.value))
              }
            />
          </div>

          <div className='form-group'>
            <label htmlFor='name'>Nome:</label>
            <input
              type='text'
              name='name'
              required
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
          </div>
          <div className='form-bottom'>
            <button type='submit'>Salvar</button>
            <Link to={'/sorteio'}>Ir para o sorteio </Link>
          </div>
        </form>
        <div className='clear'>
          <button
            type='button'
            onClick={() => {
              clear()
              setNumber(1)
            }}
          >
            Limpar Lista
          </button>
        </div>
      </div>
    </div>
  )
}
