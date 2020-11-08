const { admin } = require('./config')
const db =admin.firestore();

var maptt = function(branch){
    db.collection('timetable').doc(branch).collection('Mon').get().then((dat)=>{
    var tt=[];
    dat.forEach((doc)=>{
        tt.push({
            day:1,
            subject:doc.data().SUBJECT,
            start:doc.data().START_TIME,
            end: doc.data().END_TIME,
            link:doc.data().LINK,
        })
    })
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
tt.forEach((doc)=>{
    var tim = doc.start;
    var timeParts = tim.split(":");
    if(ISTTime.getHours()==timeParts[0] && ISTTime.getMinutes()==timeParts[1])
    scheduleHelper(doc.subject,doc.link)

  })  
    
    }).catch((err)=>{
        console.log(err)        
    })
    
    
}

module.exports = maptt