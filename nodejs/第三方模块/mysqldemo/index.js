/**
 * Created by Administrator on 2014-10-21.
 *  c.k
 *  demo s使用mysql 模块链接 mysql 数据库
 */

// 引用mysql 模块
var mysql      = require('mysql');
//  配置链接信息
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'f10'
});
 //  执行链接
con.connect();
// -------------------
// 执行查询
/**
 *   error  错误
 *   rows  查询的结果集
 *   fields  查询的其它信息
 */
con.query('SELECT * FROM t_stu', function (error,rows,fields) {

    console.log(rows);
    //  关闭数据库
    con.end();
});

// -----------------   添加
/**
 *   error  错误
 *   fields  查询的其它信息
 */
con.query('INSERT INTO t_stu VALUES (NULL,"学委",18)', function (error,fields) {

    console.log(error);
    console.log(fields.insertId);
    //  关闭数据库
    con.end();
});


