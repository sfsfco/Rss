# Rss
read RSS feed and save it to the database
clone project
npm install
you can configure the database by creating .env with the values:
MYPORT="3000"
MYDATABASE=""
MYUSER=""
MYPASSWORD=""
MYHOST="localhost"
MYDIALECT="mysql"
or you can write the database credentials directly from (./src/config/config)
run the project: npm run start
database and tables will be created if not exist
to test the project import the postman collection from (./src/test/Rss.postman_collection.json)
