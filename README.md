# ABBA
Apache Bootstrap & Bootswatch Autoindex

Folk 自 [https://github.com/jmlemetayer/abba](ABBA)

静态资源的输出版本，用于美化列表页。

### Installed files

    <Directory /var/tmp/lxb>
      Options Indexes
      AllowOverride all
      Require all granted
      HeaderName ../abba/header.html
      ReadmeName ../abba/footer.html
      IndexIgnore ..
      IndexOptions FancyIndexing
      IndexOptions HTMLTable
      IndexOptions SuppressDescription
      IndexOptions SuppressRules
      IndexOptions NameWidth=*
    #  IndexOptions SuppressIcon
      IndexOrderDefault Descending Name
      IndexOptions SuppressColumnSorting
    </Directory>