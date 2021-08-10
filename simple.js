;(function(){
let btn = document.getElementById('hashbonPaymentBtn');
let c = typeof btn.dataset.color !== 'undefined' ?  btn.dataset.color : "blue";
console.log(c);
btn.style.width = "140px";
btn.style.textAlign = "center";
btn.style.padding = "16px 16px";
btn.style.textDecoration = "none";
btn.style.display = "block";
btn.style.border = "1px solid #ccc";
btn.style.borderRadius = "4px";
btn.style.color = "#fff";
btn.style.cursor = "pointer";
switch(c)
  {
    case 'red':btn.style.backgroundColor="#f00"; break;
    case 'green':btn.style.backgroundColor="#0f0"; break;
    case 'black':btn.style.backgroundColor="#000"; break;
    case 'blue':
    default: btn.style.backgroundColor="#00f";
  }
let shopId = typeof btn.dataset.shopid !== 'undefined'?btn.dataset.shopid:"0";
let shopInvoiceId = typeof btn.dataset.shopinvoiceid !== 'undefined'?btn.dataset.shopinvoiceid:"0";
let amount = typeof btn.dataset.amount !== 'undefined'?btn.dataset.amount:"0";
let invoiceCurrency = typeof btn.dataset.invoicecurrency !== 'undefined'?btn.dataset.invoicecurrency:"";
let receiveCurrency = typeof btn.dataset.receivecurrency !== 'undefined'?btn.dataset.receivecurrency:"";
let ref= "https://hashbon.com/api/v1/invoices/create/fromlink?"
        +"shopId="+shopId
        +"&shopInvoiceId="+shopInvoiceId
        +"&amount="+amount
        +"&invoiceCurrency="+invoiceCurrency
        +"&receiveCurrency="+receiveCurrency;
btn.setAttribute("href", ref);
}());
