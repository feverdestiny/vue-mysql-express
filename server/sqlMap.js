// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, password) values (0,?, ?)',
        select: 'select name,age from user '
    }
}
module.exports = sqlMap;