import { ChangeEvent, FC, useRef, useState } from 'react'
import { faAt, faLock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Checkbox from '../../atoms/Checkbox'

const Form: FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isKeepLogged, setIsKeepLogged] = useState<boolean>(true)

  const handleCheckedKeepLogged = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.target.checked
    setIsKeepLogged(checked)
  }

  return (
    <form className="bg-white w-1/4 h-2/3 rounded-lg flex flex-col px-8 drop-shadow-2xl">
      <div className="mb-24 mt-24">
        <h1 className=" text-4xl italic font-bold">SIGN IN</h1>
        <h2>This is our site for memorising daily events and feeling</h2>
      </div>
      <div className="flex flex-col gap-12">
        <Input
          inputType="email"
          refValue={usernameRef}
          suffixIcon={faAt}
          label="Username"
          placeholder="Enter username/email"
          // errorMessage="No such email"
        ></Input>
        <Input
          inputType="password"
          refValue={passwordRef}
          suffixIcon={faLock}
          label="Password"
          placeholder="Enter password"
        ></Input>
        <Checkbox name="keep-logged" checkedState={isKeepLogged} setCheckedState={handleCheckedKeepLogged}>
          Keep me logged
        </Checkbox>
        <Button icon={faRightFromBracket} type="submit">
          log in
        </Button>
      </div>
    </form>
  )
}

export default Form
