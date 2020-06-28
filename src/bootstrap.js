const moment = require("moment")
//const collect = require('collect.js')

moment.updateLocale("es", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
  weekdaysShort: 'dom_lun_mar_mié_jue_vie_sáb'.split('_'),
})

export {moment}