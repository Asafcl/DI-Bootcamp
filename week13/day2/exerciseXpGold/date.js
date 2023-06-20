function sendDatos() {
    var howDays
    var howMonth
     var todayNow = new Date()
     var day = todayNow.getDate() 
     var month = todayNow.getMonth()+1

    if(month === '1')
      howMonth = 0
      else
      howMonth = 12-month
    
      if (day ==='1')
      howDays = 0
      else
      howDays = 31-day

     
    return()
    
  }

  module.exports = {sendDatos}