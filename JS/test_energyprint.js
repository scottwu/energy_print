var ACV101SGH = {
  power: "2363",
  airType: "ACV-101SG-H",
  rated: "10.1",
  cspf: "5.08",
  cateNo: "ACN-109-1104"};

var ACV41PV = {
  power: "895",
  airType: "ACV-41PV",
  rated: "4.1",
  cspf: "5.44",
  cateNo: "ACN-108-0295"};

var btn = document.getElementById("enter");
btn.addEventListener('click',function(){
    var type = ('typeList').val();
    var pct = {};
    var airt = {};
    var rtk = {};
    var cspfw = {};
    var ctc = {};

    if (type === "ACV-101SG-H") {
      pct = power;
      airt = airType;
      rtk = rated;
      cspfkWh = cspf;
      ctc = cateNo 
    }else if (type === "ACV-41PV"){
      pct = power;
      airt = airType;
      rtk = rated;
      cspfkWh = cspf;
      ctc = cateNo 
    };
    

});
