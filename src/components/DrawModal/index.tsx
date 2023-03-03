import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Display, IData } from '../../types/types'
import { handleWinner } from '../../utils/handleWinner'
import ReactLoading from 'react-loading'

import './styles.css'

export function DrawModal() {
  const [winner, setWinner] = useState<IData | null>(null)
  const [displayLoading, setDisplayLoading] = useState<Display>('none')
  const [displayWinner, setDisplayWinner] = useState<Display>('none')

  const { userWinner } = handleWinner()

  function getUserWinner() {
    setDisplayLoading('block')
    setDisplayWinner('none')

    setTimeout(() => {
      const newWinner = userWinner()
      if (newWinner) setWinner(newWinner)

      setDisplayLoading('none')
      setDisplayWinner('block')
    }, 5000)
  }

  return (
    <div className='modal-container shadow'>
      <h1>Sortear ganhador</h1>
      <div className='winner'>
        <div style={{ display: displayLoading }}>
          <ReactLoading type='spin' width={32} height={32} />
        </div>
        <p style={{ display: displayWinner }}>Número: {winner?.number}</p>
        <p style={{ display: displayWinner }}>Ganhador: {winner?.name}</p>
      </div>
      <button
        type='button'
        onClick={() => {
          getUserWinner()
        }}
      >
        Sortear
      </button>

      <Link to={'/'}>voltar para a lista</Link>
    </div>
  )
}
