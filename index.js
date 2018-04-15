function ElegantDate(date){
  if (date == null) date = new Date();

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
    daysAgo: function(val){ return daysNext(-val); },
    daysNext: daysNext,
    get yesterday(){ return daysNext(-1); },
    get tomorrow(){ return daysNext(1); },
    get beginningOfMonth(){
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      return ElegantDate(firstDay);
    },
    get endOfMonth(){
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return ElegantDate(lastDay);
    },
    monthsAgo: function(val){ return monthsNext(-val); },
    monthsNext: monthsNext,
    yearsAgo: function(val){ return yearsNext(-val); },
    yearsNext: yearsNext,
  }
}

module.exports = ElegantDate;
