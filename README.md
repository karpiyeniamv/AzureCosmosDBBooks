# AzureCosmosDBBooks

Задание: реализовать CRUD операции для таблицы в базе CosmosDB (с использованием NodeJS)

Таблица Books: ()

    "title": "The Trial",
    "author": "Kafka",
    "year": "1925",
    "id": "4d0c736c-6002-4772-817e-0709e6b64788",
    "_rid": "WQQkAPHJVl8BAAAAAAAAAA==",
    "_self": "dbs/WQQkAA==/colls/WQQkAPHJVl8=/docs/WQQkAPHJVl8BAAAAAAAAAA==/",
    "_etag": "\"8100f0a8-0000-0700-0000-5ff0c7e50000\"",
    "_attachments": "attachments/",
    "_ts": 1609615333
    
С использованием Azure сервиса FunctionApp реализованы 4 операции:

selectBook - показ всех книг;
https://function-crud.azurewebsites.net/api/selectBook?

insertBook - вставка элемента;
https://function-crud.azurewebsites.net/api/insertBook?

updateBook - обновить данные по id;
https://function-crud.azurewebsites.net/api/updateBook?

deleteBook - удалить книгу по id;
https://function-crud.azurewebsites.net/api/deleteBook?
