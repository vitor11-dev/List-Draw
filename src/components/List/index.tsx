import { useList } from '../../hooks/useList'
import { IData } from '../../types/types'

import './styles.css'

export function List() {
  const { getList } = useList()

  const data = getList()

  return (
    <div className='list-container shadow'>
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value: IData) => {
            return (
              <tr key={value.number}>
                <td>{value.number}</td>
                <td>{value.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
