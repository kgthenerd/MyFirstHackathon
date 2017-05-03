FROM mongo

COPY namegen.csv /namegen.csv

CMD mongoimport --host database -d DriverDB -c drivers --type csv --file /namegen.csv --headerline