import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../common/Button'
import { setCurrentPage } from '../../store/schedule/schedule-slice'
import { IState } from '../../store'

export const Paginator: FunctionComponent = () => {
  const { currentPage, totalPages } = useSelector((state: IState) => state.schedule.pagination)
  const dispatch = useDispatch()
  const style = 'text-secondary-50 bg-schedule-200 border-t border-r'
  const width = 'w-1/4'
  return (
    <div className='flex w-full'>
      <Button
        name='<<'
        type='button'
        colorStyle={style}
        size={width}
        disabled={currentPage === 0}
        clickHandler={() => { if (currentPage > 0) { dispatch(setCurrentPage(0)) } }}
      />
      <Button
        name='<'
        type='button'
        colorStyle={style}
        size={width}
        disabled={currentPage === 0}
        clickHandler={() => { if (currentPage > 0) { dispatch(setCurrentPage(currentPage - 1)) } }}
      />
      <Button
        name='>'
        type='button'
        colorStyle={style}
        size={width}
        disabled={currentPage === totalPages - 1}
        clickHandler={() => { if (currentPage < totalPages - 1) { dispatch(setCurrentPage(currentPage + 1)) } }}
      />
      <Button
        name='>>'
        type='button'
        colorStyle={style}
        size={width}
        disabled={currentPage === totalPages - 1}
        clickHandler={() => { if (currentPage < totalPages - 1) { dispatch(setCurrentPage(totalPages - 1)) } }}
      />
    </div>
  )
}
