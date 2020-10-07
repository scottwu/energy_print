function print_btn(value, row){
  return `<a href="EnergyPreview.html?power=${row.power}&type=${row.type}&type=${row.cool_kw}&type=${row.cspf}&type=${row.cert_no}">print</a>`;
}
// ?power=1114&Type=RAV-50AF-H