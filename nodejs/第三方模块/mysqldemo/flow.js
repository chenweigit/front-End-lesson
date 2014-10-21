/**
 * Created by Administrator on 2014-10-21.
 */
var mysql      = require('mysql');

function  getCon(){
//  配置链接信息
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ck',
        database:'f10'
    });
    return con;
}

function insertStu(stu){
    var con = getCon();
    con.query();
}

function updateStu(stu){
    var con = getCon();
    con.query();
}



