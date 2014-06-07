var express = require("express"),
    app = express(),
    cons = require("consolidate"),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;