let pool = require('./pool');

module.exports = {
	findAll(){
		var sql = 'select * from xk_student';
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = 'delete from xk_student where id in ('+ids.join()+')';
		return pool.execute(sql);
	},
	save(student){
		var sql = "insert into xk_student values(null,'"+student.name+"','"+student.gender+"','"+student.brith+"',"+student.clazz_id+")";
		console.log(sql);
		return pool.execute(sql);
	},
	update(student){
		var sql ="update xk_student set name='"+student.name+"',gender='"+student.gender+"',brith='"+student.brith+"',clazz_id="+student.clazz_id+" where id ="+student.id;
		return pool.execute(sql);
	},
	findById(id){
		var sql = 'select * from xk_student where id = '+id;
		return pool.execute(sql);
	},
	query(keys){
		var sql = "select * from xk_student where name like '%"+keys+"%' or gender like '%"+keys+"%' ";
		return pool.execute(sql);
	}
}

