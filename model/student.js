
class Student{
	constructor(id,name,gender,brith,clazz_id=null){
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.brith = brith;
		this.clazz_id = clazz_id;
	}
}
module.exports = Student;