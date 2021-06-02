# GoogleFinance-as-API

Who said Google Finance API was deprecated ? ;)   
It is still possible to call Google Services like an API using this setup.

How ?   

- Create an Excel Sheet in your Google Drive and copy formulas from Sheet.xlsx.  
- Make sure your tab name is "Datas".  
- Create a web app using google scripts and paste script.gs content. 
- Get your web app url and paste it into your index.php. 

Output will be a json array :  

```
[
  [ 
    open
    high
    low
    close (current for [O])
    volume
  ],
  [
    ...
  ]
]
```
