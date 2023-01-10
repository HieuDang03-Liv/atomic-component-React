import { ChangeEvent, FC, useRef, useState } from 'react'
import { faAt, faLock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Input from '@atoms/Input'
import Checkbox from '@atoms/Checkbox'
import Button from '@atoms/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Exception, LoginInfo } from '@configs/api/services/Users/entity'
import { UsersService } from '@configs/api/services/Users'
import { AxiosError } from 'axios'
import { login } from '@configs/state/usersSlice'
import useAppDispatch from '@hooks/useAppDispatch'
import { setJwtToken } from '@common/utility/authToken'

const Form: FC = () => {
  const dispatch = useAppDispatch()

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isKeepLogged, setIsKeepLogged] = useState<boolean>(true)
  const handleCheckedKeepLogged = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.target.checked
    setIsKeepLogged(checked)
  }

  //form validation
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInfo>()
  const usernameRegister = register('username', { required: 'Required email/username' })
  const passwordRegister = register('password', { required: 'Required password' })

  //event after submiting
  const onHandleSubmit: SubmitHandler<LoginInfo> = (data) => {
    const usersService = new UsersService()
    usersService.login({ username: data.username, password: data.password }).subscribe({
      next: (res) => {
        dispatch(login(res))
        if (res.accessToken) {
          setJwtToken(res.accessToken)
        }
      },
      error: (err: AxiosError) => {
        const errResponseData = err.response?.data as Exception
        const errMessage = errResponseData?.message
        setErrorMsg(errMessage)
      }
    })
  }

  const [errorMsg, setErrorMsg] = useState<string>('')

  return (
    <form
      className="bg-white w-1/4 h-2/3 rounded-lg flex flex-col px-8 drop-shadow-2xl"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <div className="mb-24 mt-24">
        <h1 className=" text-4xl italic font-bold">SIGN IN</h1>
        <h2>This is our site for memorising daily events and feeling</h2>
      </div>
      <div className="flex flex-col gap-12">
        <Input
          inputType="text"
          refValue={usernameRef}
          suffixIcon={faAt}
          label="Username"
          placeholder="Enter username/email"
          isRequired={true}
          handleValidateForm={usernameRegister}
          errorMessage={errors.username?.message}
        ></Input>
        <Input
          inputType="password"
          refValue={passwordRef}
          suffixIcon={faLock}
          label="Password"
          placeholder="Enter password"
          handleValidateForm={passwordRegister}
          errorMessage={errors.password?.message}
        ></Input>
        <Checkbox name="keep-logged" checkedState={isKeepLogged} setCheckedState={handleCheckedKeepLogged}>
          Keep me logged
        </Checkbox>
        <div className="relative">
          <p className="text-red-500 absolute text-sm -top-1/2">{errorMsg}</p>
          <Button icon={faRightFromBracket} type="submit">
            Log in
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Form
