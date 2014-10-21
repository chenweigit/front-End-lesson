/**
 * Created by Administrator on 2014-10-21.
 *  c.k
 *  demo s使用mysql 模块链接 mysql 数据库
 */
// 引用mysql 模块
var mysql      = require('mysql');

/**
 *    获得链接对象
 * @returns {*}   链接对象
 */


function getConAPI(){
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'f10'
    });

    return con;
}


exports.getCon = getConAPI;