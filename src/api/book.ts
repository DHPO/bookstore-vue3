import axios from "axios"
import { IResponse } from "../typings/api";
import { IBook } from "../typings/book";

const apiBase = import.meta.env.VITE_APP_API_BASE

export async function getBooks(): Promise<Array<IBook>> {
  const url = `${apiBase}/getBooks`
  return axios.post(url, {})
    .then(response => {
      const data = response.data
      if (data.msg) {
        return []
      }
      return <Array<IBook>>response.data
    })
}

export async function getBook(id: number): Promise<IBook|null> {
  const url = `${apiBase}/getBook`
  return axios.post(url, {
    id: id.toString()
  }).then(response => {
    const data = response.data
      if (data.msg) {
        return null
      }
      return <IBook>response.data
    })
}