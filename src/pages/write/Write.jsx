import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img 
        className='writeImg'
        src="https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        alt="" 
        />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput'  style={{display: "none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="tell your story...." type="text" className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
