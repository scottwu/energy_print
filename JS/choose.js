var brand=['南亨','雅哥','岠峰','城堡','高篁','祥忠','台光電','存宏'];
var brandSelect = document.getElementById("brandList");
var inner="";
for (var i=0; i<brand.length; i++){
    inner=inner+'<option value=i>'+brand[i]+'</option>';
}
brandSelect.innerHTML=inner;

var types= new Array(
  
);
types[0]=['RAV-50AF-H','RAV-28AF-H','JCV-28RN','RAV-112SG','PCM-105HD','ACV-23AF','RAV-63AF-H'];
types[1]=['ACV-101SG-H','ACV-42RN','ACV-38RN','ACV-140SG','ACV-50PV','ACV-125PV','ACV-160SG','ACV-101SG','ACV-140SG-H','ACV-28PV','ACV-28PV','ACV-83PV','ACV-65RN','ACV-50RN','ACV-160SG-H','ACV-72PV','ACV-73RN','ACV-112SG','ACV-90PV','ACV-28RN','ACV-85RN'];
types[2]=[]
types[3]=[]
types[4]=[]
types[5]=[]
types[6]=[]

function changeBrand(index){
  var machineType="";
  for(var i=0;i<types[index].length;i++){
    machineType=machineType+'<option value = ${ i }>'+types[index][i]+'</option>';
  }
  var typeSelect=document.getElementById("typeList");
  typeSelect.innerHTML=machineType;
}
changeBrand(document.getElementById("brandList").selectedIndex);