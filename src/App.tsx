import { Fragment, useState, useRef } from 'react'
import './App.css'
import Input from './components/Input'
import { faAt, faLock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button'

function App() {
  const inputValue = useRef<HTMLInputElement>(null)

  return (
    <Fragment>
      <Input
        inputType="text"
        refValue={inputValue}
        suffixIcon={faAt}
        label="Username"
        placeholder="Enter username"
      ></Input>
      {/* <Input
        inputType="password"
        refValue={inputValue}
        suffixIcon={faLock}
        label="Password"
        placeholder="Enter password"
      ></Input> */}
      <Button icon={faRightFromBracket}>login</Button>
    </Fragment>
  )
}

export default App
