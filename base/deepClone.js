/**
@desc 简单深拷贝
*/
function deepClone(obj){
    let arr = Array.isArray(obj)?[]:{};
    for(var i in obj){
        arr[i] = typeof obj[i]==="object"?deepClone(obj[i]):obj[i]
    }
    return arr
}


// 由于typeof 使用时,构造类型默认为对象 (new String,  new Boolean)
function judgeType(value){
	var type = Object.prototype.toString.call(value);
	return ["[object Array]","[object Object]"].includes(type);  // 类型为数组或对象
}

city: "绵阳市"
createReportType: 30
depth: "20000.0"
district: "北川县"
gmtCreate: "2020/11/12 16:22:50"
gmtUpdate: "2020/11/13 10:21:00"
id: 29
isNatural: 0
lat: "31.800000"
lng: "104.200000"
locationStation: ""
magnitude: "1.70"
place: "四川省绵阳市北川县"
receiveRecordStationCount: 0
reportTime: "202010221903"
seismicTime: "2020/10/22 19:03:37"
seismicTimeFormat: "2020/10/22"
sourceType: 40
stationName: ""
stationNumber: 0