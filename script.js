
// Responsive Image Map
!function () { "use strict"; function r() { function e() { var r = { width: u.width / u.naturalWidth, height: u.height / u.naturalHeight }, a = { width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10), height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10) }; i.forEach(function (e, t) { var n = 0; o[t].coords = e.split(",").map(function (e) { var t = 1 == (n = 1 - n) ? "width" : "height"; return a[t] + Math.floor(Number(e) * r[t]) }).join(",") }) } function t(e) { return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",") } function n() { clearTimeout(d), d = setTimeout(e, 250) } function r(e) { return document.querySelector('img[usemap="' + e + '"]') } var a = this, o = null, i = null, u = null, d = null; "function" != typeof a._resize ? (o = a.getElementsByTagName("area"), i = Array.prototype.map.call(o, t), u = r("#" + a.name) || r(a.name), a._resize = e, u.addEventListener("load", e, !1), window.addEventListener("focus", e, !1), window.addEventListener("resize", n, !1), window.addEventListener("readystatechange", e, !1), document.addEventListener("fullscreenchange", e, !1), u.width === u.naturalWidth && u.height === u.naturalHeight || e()) : a._resize() } function e() { function t(e) { e && (!function (e) { if (!e.tagName) throw new TypeError("Object is not a valid DOM element"); if ("MAP" !== e.tagName.toUpperCase()) throw new TypeError("Expected <MAP> tag, found <" + e.tagName + ">.") }(e), r.call(e), n.push(e)) } var n; return function (e) { switch (n = [], typeof e) { case "undefined": case "string": Array.prototype.forEach.call(document.querySelectorAll(e || "map"), t); break; case "object": t(e); break; default: throw new TypeError("Unexpected data type (" + typeof e + ").") }return n } } "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : window.imageMapResize = e(), "jQuery" in window && (window.jQuery.fn.imageMapResize = function () { return this.filter("map").each(r).end() }) }();
//# sourceMappingURL=imageMapResizer.map

// Change Section
document.getElementsByClassName("button btn contact ").addEventListener("click", changeToContact)
document.getElementsByClassName("button btn booking ").addEventListener("click", changeToBooking)
function changeToContact() {

        document.getElementById("Section").innerHTML = `       <h3>Contact Us</h3>
    <div class="contact-container">
        <p>Pusat Pemerintahan Provinsi Jawa Barat berlokasi di Gedung Sate Bandung </p>
    
        <p> <i class="fas fa-map-marker-alt"></i>  <b>Alamat </b>. Jl. Diponegoro No.22, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115 </p>
    
        <p> <i class="fa fa-phone-square" aria-hidden="true"></i> <b>Tlp </b>. 022-423248, 4233347, 4230993
    
        </p>
        <p> <i class="fas fa-fax"></i>
    
              <b>Fax </b>. 022-4203450
    
        </p>
    
        <p> <i class="fas fa-at"></i> <b>Email </b>: info@jabarprov.go.id, info.jabarprov@gmail.com</p>
    
    </div>
    `;
}

function changeToBooking() {

    document.getElementById("Section").innerHTML = `  <h3>Booking Tempat Wisata</h3>
    <div class="booking-container">
        <form action="reservation.php" method="post">
            <div class="elem-group">
                <label for="name">Nama Lengkap</label>
                <input type="text" id="name" name="visitor_name" placeholder="Ridwan Kamil" required>
            </div>
            <div class="elem-group">
                <label for="email"> E-mail</label>
                <input type="email" id="email" name="visitor_email" placeholder="kangemil@gmail.com" required>
            </div>
            <div class="elem-group">
                <label for="phone"> Nomor Telpon</label>
                <input type="tel" id="phone" name="visitor_phone" placeholder="081324836872" required>
            </div>
            <div class="elem-group inlined">
                <label for="adult">Dewasa</label>
                <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required>
            </div>
            <div class="elem-group inlined">
                <label for="child">Anak</label>
                <input type="number" id="child" name="total_children" placeholder="2" min="0" required>
            </div>
            <div class="elem-group  ">
                <label for="tanggal-wisata">Tanggal Wisata</label>
                <input type="date" id="tanggal-wisata" name="tanggal-wisata" required>
            </div>

            <div class="elem-group">
                <label for="tujuan-wisata">Pilih Tempat Wisata</label>
                <select id="tujuan-wisata" name="tujuan-wisata" required>
                    <option value="" disabled>Pilih Tempat Wisata yang ada di Jawa Barat</option>
                    <option value="Tangkuban Perahu<">Tangkuban Perahu</option>
                    <option value="Keraton Cirebon">Keraton Cirebon</option>
                    <option value="Gunung Papandayan">Gunung Papandayan</option>
                    <option value="Pantai Pangandaran">Pantai Pangandaran</option>
                </select>
            </div>
            <div class="elem-group">
                <label for="catatan">Catatan Tambahan</label>
                <textarea id="catatan" name="catatan"
                    placeholder="Kosongkan jika tidak ada" ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>


    </div>
`;
}












