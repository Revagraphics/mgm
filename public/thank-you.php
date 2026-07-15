e this for thank-you.php:

<?php
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You</title>

  <!-- Google tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11167733189"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11167733189');
  </script>

  <!-- Conversion event -->
  <script>
    gtag('event', 'conversion', {'send_to': 'AW-11167733189/OEHWCLrxsZwYEMWrmM0p'});
  </script>
</head>
<body>
  <h1>Thank you!</h1>
  <p>Your form was submitted successfully.</p>
  <p><a href="/">Go back to home</a></p>
</body>
</html>