## GITHUB

Grab the project from https://github.com/raynor85/Blue-Economics-New and "FORK" it. After setting up the
local webserver, you can start work on the website locally (the forked project should be located in the webserver
folder, which for MAMP and XAMP is "htdocs"). After you have developed and tested something, you can make a pull
request, so your modification would be added to https://github.com/raynor85/Blue-Economics-New

## WEBSERVER

Since the website works under PHP and MYSQL, you need to install a webserver. For mac user I suggest MAMP, but
also XAMPP is good too.
After installing MAMP (or XAMPP), you have to activate the Virtual Host for your web server. To do so you have to
find the "httpd.conf" file and be sure to decomment (removing the # at the beginning of the Include statement)
the inclusion of the file "httpd-vhosts.conf". Locate the string having format similar to this:

Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

Locate the file "httpd-vhosts.conf" and add the virtual directory of the blue economics website. It should be
something similar to this (depending on the path of your project):

```
<VirtualHost *:80>
   # This is the file system path of your blue economics local project
   DocumentRoot /Applications/MAMP/htdocs/blue_economics/build
   # This is how your virtual host would be reached via browser
   ServerName local.blue_economics.com
</VirtualHost>
```

In the end you have to add to your .hosts the following:

```
127.0.0.1       local.blue_economics.com
```

Start your MAMP or XAMPP after setting the default Apache port (80) and the default MySQL port (3306),
and check if you can see the website at "local.blue_economics.com". If you see a database connection error
or you can see the website, you have accomplished this part.

## DATABASE

The website read from the local database, which can be found inside /dump, so you have to import it in your MySQL.
The database credential can be found in /build/config/dev/mysql.ini for development and /build/config/prod/mysql.ini
for production (now we only care about development). It is better to keep those and adjust the MySQL to work with those.


### FURTHER NOTES

If you ignored the initial instructions and installed your blue_economics folder outside of the MAMP directory, then you will also need something like this in your httpd-conf file:

```
<Directory "/path/to/Blue-Economics-New/build">
    Options All
    AllowOverride All
    Order allow,deny
    Allow from all

    XSendFilePath "/path/to/Blue-Economics-New/build"
</Directory>
```
