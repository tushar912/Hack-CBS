const { admin } = require('./config')
const db =admin.firestore();

var maptt = function(branch){
    db.collection('timetable').doc(branch).get().then((dat)=>{
    var tt = [];
       var monday = dat.data().monday;
        monday.forEach((dc)=>{
            tt.push({
                day:1,
                time: dc.time,
                link:dc.link
            })
        }
        );
       
        return tt
      
    }).catch((err)=>{
        console.log(err)        
    })
    
    
}

module.exports = maptt