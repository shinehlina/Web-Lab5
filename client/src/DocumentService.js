"use strict"
import axios from 'axios';

const url = "http://localhost:3000/api/documents/";

class DocumentService {
    static getDocuments() {
        return axios.get(url);
    }

    static insertDocument(title, body) {
        return axios.post(url, {
            title: title,
            body : body
        });
    }

    static deleteById(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default DocumentService;