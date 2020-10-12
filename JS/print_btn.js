function print_btn(value, row){
  return `<a target="_blank" href="EnergyPreview.html?power=${row.power}&type=${row.type}&cool_kw=${row.cool_kw}&cspf=${row.cspf}&cert_no=${row.cert_no}">print</a>`;
} 

var $table = $('#table')

  $(function() {
    $table.bootstrapTable('hideColumn', ['cool_kw','cert_no','power']);
  })

  function ajaxRequest(params) {
    var url = 'https://backend.jin-ting.com.tw/api/items/energy_label'
    $.get(url).then(function (res) {
      params.success(res.data)
    })
  }