function ElegantDate(date){
  return {
    get date(){ return date; },
    get beginningOfMonth(){
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      return elegantDate(firstDay);
    },
    get endOfMonth(){
      var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      return elegantDate(lastDay);
    },
  }
}

module.exports = ElegantDate;
