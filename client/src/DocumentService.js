"use strict";
import axios from "axios";

const url = "http://localhost:3000/api/documents/";

class DocumentService {
  static getDocuments() {
    return axios.get(url);
  }

  static insertDocument(title, body) {
    console.log(title + "     " + body);
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
}

export default DocumentService;
