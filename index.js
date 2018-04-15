function ElegantDate(date){

  function daysNext(val){
    var newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + val);
    return ElegantDate(newDate);
  }

  function monthsNext(val){
    var newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() + val);
    return ElegantDate(newDate);
  }

  function yearsNext(val){
    var newDate = new Date(date.getTime());
    newDate.setYear(newDate.getFullYear() + val);
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
    daysAgo: function(val){ return daysNext(-val); },
    daysNext: daysNext,
    monthsAgo: function(val){ return monthsNext(-val); },
    monthsNext: monthsNext,
    yearsAgo: function(val){ return yearsNext(-val); },
    yearsNext: yearsNext,
    get yesterday(){ return daysNext(-1); },
    get tomorrow(){ return daysNext(1); },
  }
}

module.exports = ElegantDate;
