import React from 'react'
import CompletedItems from './Completed Items/CompletedItems'

export default function CompletedTasks(props) {
  return (
    <>
      <CompletedItems text = {props.text} />
    </>
  )
}
