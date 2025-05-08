import { instance } from '../instance'
// import { handleApiError } from '../helpers'
import { AxiosError } from 'axios'

export function handleApiError(err: unknown, method: string): never {
  const error = err as AxiosError
  console.error(`Error from User API ${method}:`, error.message, error.response?.data)
  throw error
}

export default {
    async getAll<T>(): Promise<T[]> {
        try {
            const response = await instance.get<T[]>('/product')
            return response.data
        } catch (err) {
            handleApiError(err, 'getAll')
        }
    },
    async getById<T>(id: string | number): Promise<T> {
        try {
            const response = await instance.get<T>(`/product/${id}`)
            return response.data
        } catch (err) {
            handleApiError(err, 'getById')
        }
    },
    async search<T>(keyword: string): Promise<T[]> {
        try {
            const response = await instance.get<T[]>('/product', { params: { keyword } })
            return response.data
        } catch (err) {
            handleApiError(err, 'search')
        }
    },
    async create<TBody, TRes>(body: TBody): Promise<TRes> {
        try {
            const response = await instance.post<TRes>('/product', body)
            return response.data
        } catch (err) {
            handleApiError(err, 'create')
        }
    },
    async uploadImage<TRes>(formData: FormData): Promise<TRes> {
        try {
            const response = await instance.post<TRes>('/product/image', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            })
            return response.data
        } catch (err) {
            handleApiError(err, 'uploadImage')
        }
    },
    async update<TBody, TRes>(id: string | number, body: TBody): Promise<TRes> {
        try {
            const response = await instance.put<TRes>(`/product/${id}`, body)
            return response.data
        } catch (err) {
            handleApiError(err, 'update')
        }
    },
    async delete<T>(id: string | number): Promise<T> {
        try {
            const response = await instance.delete<T>(`/product/${id}`)
            return response.data
        } catch (err) {
            handleApiError(err, 'delete')
        }
    },
    async deleteByBody<TBody, TRes> (body: TBody): Promise<TRes | undefined> {
        try {
            const response = await instance.delete<TRes>('/product', {
            data: body
            })
            return response.data
        } catch (err) {
            handleApiError(err, 'delete')
        }
    },
}