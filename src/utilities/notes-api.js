import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
}

// Only send payloads for creating and updating data
export async function addNote(note) {
    return sendRequest(`${BASE_URL}/new`, 'POST', note)
}

export async function deleteNote(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}