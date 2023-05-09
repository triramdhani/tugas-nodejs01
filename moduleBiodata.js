const { showBiodata } = require('./module/module.biodata')

const data = showBiodata()

console.log(`Nama : ${data.Nama}`)
console.log(`Tempat Lahir : ${data.TempatLahir}`)
console.log(`Tanggal Lahir : ${data.TanggalLahir}`)
console.log(`Alamat : ${data.Alamat}`)
