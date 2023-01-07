import { useDispatch } from 'react-redux'
import { AppDispatch } from '@configs/state/store'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch
