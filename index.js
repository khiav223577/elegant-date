function ElegantDate(date){
  function daysNext(val){
    var newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + val);
    return ElegantDate(newDate);
  }
  return {
    get date(){ return date; },
    get beginningOfMonth(){
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      return ElegantDate(firstDay);
    },
    get endOfMonth(){
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return ElegantDate(lastDay);
    },
    get yesterday(){ return daysNext(-1); },
    get tomorrow(){ return daysNext(1); },
  }
}

module.exports = ElegantDate;
