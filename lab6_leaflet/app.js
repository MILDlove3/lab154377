var map = new L.map("map", {
    center: [18.802808, 98.950170],
    zoom: 13
})

var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var maker1 = new L.marker([18.802808, 98.950170]).bindPopup("คณะสังคม")
var maker2 = new L.marker([18.7827263, 98.9140011]).bindPopup("ป่า")
var maker3 = new L.marker([18.7970602, 98.9687761]).bindPopup("วัด")
var maker4 = new L.marker([18.804422276135217, 98.94816167825263]).bindPopup("คณะนิติ")

var roadGrom = [
    [18.8026938719401, 98.95137050007584],
    [18.80340448555508, 98.94954358311153]
]

var line = new L.polyline(roadGrom, { color: 'red' }).bindPopup("ถนนหน้าคณะสังคม")

var angGeom = [
    [18.80864610671854, 98.94909181011947],
    [18.80734173215016, 98.95138839554606],
    [18.804805419316853, 98.94920663939081],
    [18.80652045408529, 98.94740764747333],
    [18.808706494185095, 98.94898973965607]
]

var angkeaw = new L.polygon(angGeom, { color: 'blue' }).bindPopup("อ่างแก้ว")

var Geom = [
    [18.804152450688104, 98.94732965758664],
    [18.804195763908613, 98.94837125174938],
    [18.80352534864193, 98.94870957073454],
    [18.802607259707663, 98.94825847875434],
    [18.804054848819487, 98.94726156547812]
]

var Geom = new L.polygon(Geom, { color: 'blue' }).bindPopup("อ่างตาด")

var amphoe = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "	cm_dwr:cm_dwr_amphoe_4326",
    format: "image/png",
    transparent: true
})

var village = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_village_4326",
    format: "image/png",
    transparent: true
})

var trans = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_trans_4326",
    format: "image/png",
    transparent: true
})

var landuse = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_landuse_4326",
    format: "image/png",
    transparent: true,
    opacity: 0.5
})

Esri_WorldImagery.addTo(map);
maker1.addTo(map);
maker2.addTo(map);
maker3.addTo(map);
maker4.addTo(map);

var BaseMap = {
    "Esri_WorldImagery": Esri_WorldImagery,
    "osm": osm,
    "OpenStreetMap_HOT": OpenStreetMap_HOT,
    "OpenTopoMap": OpenTopoMap
}

var Overlay = {
    "การใช้ประโยชน์ที่ดิน": landuse,
    "Maker 1": maker1,
    "Maker 2": maker2,
    "Maker 3": maker3,
    "Maker 4": maker4,
    "ถนนคณะสังคม": line,
    "อ่างแก้ว": angkeaw,
    "อ่างตาด": Geom,
    "ขอบเขตอำเภอ": amphoe,
    "หมู่บ้าน": village,
    "เส้นทาง": trans
}
L.control.layers(BaseMap, Overlay).addTo(map)

map.on("click", (e) => {
    console.log(e.latlng)
    document.getElementById("lat").innerText = e.latlng.lat
    document.getElementById("lng").innerText = e.latlng.lng
})