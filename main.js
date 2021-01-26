
ekmek_btn = document.querySelector("#ekmekEkle")
cikolata_btn = document.querySelector("#cikolataEkle")
domates_btn = document.querySelector("#domatesEkle")
kupon_gir_btn = document.querySelector("#kupon_ekle")

sepet_ul = document.querySelector("#sepet")
var ekmek_li = document.createElement("li")
var cikolata_li = document.createElement("li")
var domates_li = document.createElement("li")
var indirim_li = document.createElement("li")

ekmek_li.innerHTML = "Ekmek"; 
ekmek_li.classList.add("list-group-item");

cikolata_li.innerHTML = "Çikolata"; 
cikolata_li.classList.add("list-group-item");

domates_li.innerHTML = "Domates";
domates_li.classList.add("list-group-item");

indirim_li.innerHTML = "İndirim Kuponu";
indirim_li.classList.add("list-group-item");
indirim_li.classList.add("active");


total_price_li = document.querySelector("#total_price")

indirim_kodu_input = document.querySelector("#indirim_kodu_input")

indirim_kodu_input.value = "erciyes-bilgisayar"

productList = []
price_list = {
    "ekmek":2,
    "cikolata":5,
    "domates":6
}

ekmek_count = 0
cikolata_count = 0
domates_count = 0

total_price = 0

indirim_price = 5

is_indirim_applied = false

ekmek_btn.onclick = function () {
    if(ekmek_count == 0){
        sepet_ul.appendChild(ekmek_li);
        ekmek_count+=1
        ekmek_li.innerHTML = "Ekmek ("+ekmek_count+") "+ekmek_count*price_list["ekmek"]+"₺"; 
    }
    else if (ekmek_count > 0){
        ekmek_count+=1
        ekmek_li.innerHTML = "Ekmek ("+ekmek_count+") "+ekmek_count*price_list["ekmek"]+"₺"; 
    }

    total_price += price_list["ekmek"]
    total_price_li.innerHTML = "<strong>Toplam Fiyat "+total_price+"₺</strong>"
};

cikolata_btn.onclick = function () {
    if(cikolata_count == 0){
        sepet_ul.appendChild(cikolata_li);
        cikolata_count+=1
        cikolata_li.innerHTML = "Çikolata ("+cikolata_count+") "+cikolata_count*price_list["cikolata"]+"₺";
    }
    else if (cikolata_count > 0){
        cikolata_count+=1
        cikolata_li.innerHTML = "Çikolata ("+cikolata_count+") "+cikolata_count*price_list["cikolata"]+"₺";
    }
    
    total_price += price_list["cikolata"]
    total_price_li.innerHTML = "<strong>Toplam Fiyat "+total_price+"₺</strong>"

    
};

domates_btn.onclick = function () {
    if(domates_count == 0){
        sepet_ul.appendChild(domates_li);
        domates_count+=1
        domates_li.innerHTML = "Domates ("+domates_count+") "+domates_count*price_list["domates"]+"₺"; 
    }
    else if (domates_count > 0){
        domates_count+=1
        domates_li.innerHTML = "Domates ("+domates_count+") "+domates_count*price_list["domates"]+"₺"; 
    }
    
    total_price += price_list["domates"]
    total_price_li.innerHTML = "<strong>Toplam Fiyat "+total_price+"₺</strong>"
    
};

kupon_gir_btn.onclick = function (){
    var indirim_kodu = indirim_kodu_input.value
    
    if (indirim_kodu == "erciyes-bilgisayar"){
        if(!is_indirim_applied){
            total_price -= indirim_price
            total_price_li.innerHTML = "<strong>Toplam Fiyat "+total_price+"₺</strong>"
            indirim_li.innerHTML = "İndirim Kuponu <br>"+indirim_kodu+" "+indirim_price+"₺";
            sepet_ul.appendChild(indirim_li);
            console.log("indirim")
            is_indirim_applied = true
        }
    } 

}