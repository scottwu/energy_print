// var $table = $('#table')
//   var $ok = $('#ok')

//   $(function() {
//     $ok.click(function () {
//       $table.bootstrapTable('refresh')
//     })
//   })
// function responseHandler(res) {
//     return res.rows
//   }
var $table = $('#table')

$(function() {
  $('#toolbar').find('select').change(function () {
    $table.bootstrapTable('destroy').bootstrapTable({
      exportDataType: $(this).val(),
      exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
      columns: [
        {
          field: 'state',
          checkbox: true,
          visible: $(this).val() === 'selected'
        },
        {
          field: 'id',
          title: 'ID'
        }, {
          field: 'name',
          title: 'Item Name'
        }, {
          field: 'price',
          title: 'Item Price'
        }
      ]
    })
  }).trigger('change')
})
