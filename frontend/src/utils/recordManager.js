// src/utils/recordManager.js

const STORAGE_KEY = 'baseballRecords';

export function loadRecords() {
    const records = localStorage.getItem(STORAGE_KEY);
    return records ? JSON.parse(records) : [];
}

export function saveRecords(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function addRecord(newRecord) {
    let records = loadRecords();
    
    const nextId = records.length > 0 
        ? Math.max(...records.map(r => r.id)) + 1 
        : 1;

    const recordWithId = { id: nextId, ...newRecord };

    records.push(recordWithId);
    saveRecords(records);
    return records;
}

export function deleteRecord(id) {
    let records = loadRecords();
    records = records.filter(record => record.id !== id);
    saveRecords(records);
    return records;
}

export function updateRecord(updatedRecord) {
    let records = loadRecords();
    const index = records.findIndex(record => record.id === updatedRecord.id);

    if (index !== -1) {
        records[index] = updatedRecord;
        saveRecords(records);
    }
    return records;
}