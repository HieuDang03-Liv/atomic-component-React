import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '@configs/state/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
