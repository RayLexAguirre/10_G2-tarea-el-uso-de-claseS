const YEAR = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

export default class DueDate{
    constructor(number, month, year){
        this._date = new Date(year, this._getNumMonth(month), number);
        this._date.setHours(0, 0, 0);
    }

    hasExpired(){
        return Date.now() > this._date;
    }

    daysToExpire(){
        let today = new Date();
        today.setHours(0, 0, 0);
        let oneDay = 1000 * 60 * 60 * 24
        let days = Math.round((this._date.getTime() - today) / oneDay)

        if(days >= 0){
            return days;
        }

        return -1;
    }

    _getNumMonth(month){
        month = month.toLowerCase();
        let numMonths = YEAR.indexOf(month);

        if(numMonths < 0){
            return 0;
        }

        return numMonths;
    }
}