import './post.css'


const Post = () => {
  return (  
<div className="post">
     <img 
     className="postImg"
     src="https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_1280.jpg" 
     alt="" 
     />
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
     </div>
     <p className='postDesc'>
      Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Architecto aperiam facilis
       eius, praesentium tenetur neque officiis laudantium illum nulla,
        assumenda, maxime sit reprehenderit culpa minus? Molestias nostrum 
        ratione accusantium minus?
     </p>
        </div>
  )
}

export default Post