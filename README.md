# Hashbon Payment Button

This small piece of code helps web-site owners add payment button for Hashbon.

## Preparation steps
1. Register on Hashbon.com
2. Under Business section open Merchant settings and switch on the online payments
3. Get ShopId from that page

## Work with the lib
1. Download hashbonpaymentbtn.js
2. Put the file on the hosting
3. On Payment page add the js code
```
<script src="path/to/hashbonpaymentbtn.js"></script>
```
4. Add anchor tag with parameters
```
<a id="hashbonPaymentBtn"
   data-color="red"
   data-shopid="123456"
   data-shopinvoiceid="myshop123order567"
   data-amount="99.95"
   data-invoicecurrency="USD"
   data-receivecurrency="ETH"
>Pay</a>
```
5. You've done and you're awesome

## Parameters
### data-color
The color of the payment button.\
It's blue by default.\
Options: `red`, `green`, `black`, and `blue`

### data-shopid
The ShopId in Hashbon.\
Only digits

### data-shopinvoiceid
The inside shop invoice id to use in your own system, e.g. CRM.\
Latin characters and digits.

### data-amount
It's just a price

### data-invoicecurrency
The currency of the selling.\
If not provided, Hashbon consider it as EUR.\
Options: any currency code

### data-receivecurrency
After a payment Hashbon converts input currency to this one.\
If not provided, Hashbon consider it as BTC.\
Options: any currency code
