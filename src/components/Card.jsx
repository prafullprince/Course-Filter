import toast from 'react-hot-toast';
import { FcLike , FcLikePlaceholder} from 'react-icons/fc'

const Card = (props) => {

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  let course = props.course;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      // pehle se like hua pada hai
      setLikedCourses((prev)=>prev.filter( (cid)=> (cid !== course.id) ));
      toast.error("like removed");
    }
    else{
      // pehle se unlike hua pada hai
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses( (prev)=> [...prev , course.id ])
      }
      toast.success("Liked Successfull");
    }
  }



  return (
    <div className='flex flex-col w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-20px] flex justify-center items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{
          course.description.length > 100 ? (course.description.substr(0 , 100)) + "..." : (course.description)
        }</p>
      </div>
    </div>
  )
}

export default Card
