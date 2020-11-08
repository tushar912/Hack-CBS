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
    console.log(tt)
      return tt;
    }).catch((err)=>{
        console.log(err)        
    })
    
    
}

module.exports = maptt