# GoogleFinance-as-API

Who said Google Finance API was deprecated ? ;)   
It is still possible to call Google Services like an API using this setup.

How ?   

- Create an Excel Sheet in your Google Drive.  
- Rename your tab "Datas".  
- Enter these formulas :
  + A3 : GOOGLEFINANCE("EPA:"&A2;"all";A1;AUJOURDHUI();"DAILY")
  + A1 : EQUIV(MAX(A:A);A:A;0)
  + B2 : GOOGLEFINANCE("EPA:"&A2;"priceopen")
  + C2 : GOOGLEFINANCE("EPA:"&A2;"high")
  + D2 : GOOGLEFINANCE("EPA:"&A2;"low")
  + E2 : GOOGLEFINANCE("EPA:"&A2;"price")
  + F2 : GOOGLEFINANCE("EPA:"&A2;"volume")
- Create a web app using google scripts and paste script.gs content. 
- Copy your web app url and paste it into your index.php. 

Output will be a json array :  

```
[
  [ 
    open
    high
    low
    close (current for last element)
    volume
  ],
  [
    ...
  ]
]
```
