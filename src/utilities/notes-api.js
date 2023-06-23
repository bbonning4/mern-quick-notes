import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function addNote(note) {
    return sendRequest(`${BASE_URL}/new`, 'POST', note)
}

export async function deleteNote(id) {
    return sendRequest(`${BASE_URL}/${id}/delete`, 'POST', {})
}