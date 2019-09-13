export interface Aeronave{

    "callSing": string, 
    "maintHistories": [
        {
        "machineID": number, 
        "maintCmpActivityID": number,
        "datelnit": Date,
        "dateFinish": Date,
        "maintDescript": string,
        "approval": string,
        "id": string,
        "maintCmpActivity": {
            "maintCmpActName": string, 
            "maintCmpActDescrip": string, 
            "totalTime": number,
            "frequencyHoursUse": number,
            "frequencyCycleUse": number,
            "id": string
            }
        }
    ]
}