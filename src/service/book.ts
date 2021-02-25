import * as api from "../api/book"
import { IBook } from "../typings/book";

export async function loadAllBooks(): Promise<Array<IBook>> {
  return api.getBooks()
}

export async function loadOneBook(id: number): Promise<IBook|null> {
  return api.getBook(id)
}