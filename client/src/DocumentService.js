"use strict";
import axios from "axios";

const url = "http://localhost:3000/api/documents/";

class DocumentService {
  static getDocuments() {
    return axios.get(url);
  }

  static insertDocument(title, body) {
    return axios.post(
      `${url}create`,
      {
        title: title,
        body: body
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  static deleteById(id) {
    return axios.delete(`${url}${id}`);
  }

  static getDocumentById(id) {
    return axios.get(`${url}${id}`);
  }

  static updateById(id, title, body) {
    // eslint-disable-next-line
    console.log(id);
    return axios.post(
      `${url}update/${id}`,
      {
        title: title,
        body: body
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }
}

export default DocumentService;
