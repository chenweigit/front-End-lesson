/**
 * Created by Administrator on 2014-10-21.
 */
var base = require('./database');


/**
 *    通过主键查询数据
 * @param id
 */
function selectById(id){
    var con = base.getCon();
    var sql = "SELECT * FROM t_stu WHERE pk_id = ?";
    con.query(sql,[id],function(e,r,f){
        console.log(e);
        console.log(r);
        con.end();
    });
}

//selectById(1);



/**
 *   添加一个学生
 * @param stu
 */
function insertStuden(stu){
    var s = null;
    var con = base.getCon();
    var sql = "INSERT INTO t_stu VALUES(null,?,?)";
//    console.log(sql);
    con.query(sql,stu,function(e,f){
        console.log(f);
        con.end();

    });
}
//  测试添加
var temparray = ['班长',30];
insertStuden(temparray);

var username = '';
var psd = '123';

var temp = "SELECT * FROM t_stu WHERE username = 1 or 1==1  AND psd ="+psd;