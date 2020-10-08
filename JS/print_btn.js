function print_btn(value, row){
  return `<a target="_blank" href="EnergyPreview.html?power=${row.power}&type=${row.type}&cool_kw=${row.cool_kw}&cspf=${row.cspf}&cert_no=${row.cert_no}">print</a>`;
} 

var $table = $('#table')

  $(function() {
    $table.bootstrapTable('hideColumn', ['cool_kw','cert_no','power']);
  })