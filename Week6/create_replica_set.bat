mkdir \data\rs1 \data\rs2 \data\rs3
mongod --replSet rs1 --logpath "\data\rs1\1.log" --dbpath \data\rs1 --port 27018 | mongod --replSet rs1 --logpath "\data\rs2\2.log" --dbpath \data\rs2 --port 27019 | mongod --replSet rs1 --logpath "\data\rs3\3.log" --dbpath \data\rs3 --port 27020
