<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta charset="utf-8"/>
  </head>
  <body>	
    <script>

      $.getJSON(
        "your_web_app_url",
        { 
          ticker:"AF" ,
          startDate:"2020-11-01" // yyyy-mm-dd
        }, 
        function(data) { 
          console.log(data);
        }
      );

    </script>
  </body>
</html

			
