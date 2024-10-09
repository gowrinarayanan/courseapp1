const mongoose=require ('mongoose');
const courseSchema=new mongoose.Schema({
    courseImage:String,
    courseId:String,
    courseName:String,
    courseCategory:String,
    courseDescription:String
})
const  CourseData=mongoose.model('course',courseSchema);
module.exports=CourseData;