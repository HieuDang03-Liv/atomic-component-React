import initializeAxios from './axios'
import { catchError, map } from 'rxjs/operators'
import { defer, Observable } from 'rxjs'

const axiosInstance = initializeAxios()

const getRequest = <T>(url: string, queryParams?: object, other?: any): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, { params: queryParams, ...other })).pipe(
    map((result) => result.data),
    catchError((err) => {
      throw err
    })
  )
}

const postRequest = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  return defer(() => axiosInstance.post<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data),
    catchError((err) => {
      throw err
    })
  )
}

const putRequest = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  return defer(() => axiosInstance.put<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data),
    catchError((err) => {
      throw err
    })
  )
}

const patchRequest = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  return defer(() => axiosInstance.patch<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data),
    catchError((err) => {
      throw err
    })
  )
}

const deleteRequest = <T>(url: string, body: object): Observable<T | void> => {
  return defer(() => axiosInstance.delete<T>(url, { data: body })).pipe(
    map((result) => result.data),
    catchError((err) => {
      throw err
    })
  )
}

export default { get: getRequest, post: postRequest, put: putRequest, patch: patchRequest, delete: deleteRequest }
