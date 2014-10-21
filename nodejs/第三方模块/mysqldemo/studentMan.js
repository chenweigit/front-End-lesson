/**
 * Created by Administrator on 2014-10-21.
 */

var base = require('./database');

/**
 *   添加一个学生
 * @param stu
 */
 function insertStuden(stu){
    var s = null;
    var con = base.getCon();
    var sql = "INSERT INTO t_stu VALUES (NULL,'"+stu[0]+"' ,"+stu[1]+")";
//    console.log(sql);
     con.query(sql,function(e,f){
      console.log(f);
         con.end();

     });
}
//  测试添加
//var temparray = ['班长',19];
//var show = insertStuden(temparray);
//console.log(show);


/**
 *    通过主键删除数据
 * @param id
 */
function deleteId(id){
    var con = base.getCon();
    var sql = "DELETE FROM t_stu WHERE pk_id = "+id;
    con.query(sql,function(e,f){
        console.log(f);
        con.end();
    });
}
//  测试
deleteId(6);


/**
 *    通过主键修改数据
 * @param id
 */
function updateById(id,stu){
    var con = base.getCon();
    var sql = "UPDATE t_stu SET s_name= '"+stu[0]+"' , s_age = "+stu[1]+" WHERE pk_id = "+id;
    con.query(sql,function(e,f){
        console.log(e);
        console.log(f);
        con.end();
    });
}
//  测试
//updateById(8,['纪检',20]);


/**
 *    通过主键查询数据
 * @param id
 */
function selectById(id){
    var con = base.getCon();
    var sql = "SELECT * FROM t_stu WHERE pk_id = "+id;
    con.query(sql,function(e,r,f){
        console.log(e);
        console.log(r);
        con.end();
    });
}

//selectById(1);


/**
 *    查询所有数据
 */
function selectAll(){
    var con = base.getCon();
    var sql = "SELECT * FROM t_stu ";
    con.query(sql,function(e,r,f){
        console.log(e);
        console.log(r);
        con.end();
    });
}

selectAll();