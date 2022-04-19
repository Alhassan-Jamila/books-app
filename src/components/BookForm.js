import React from 'react'

function BookForm() {
  return (
    <div className='row'>
    <span className='col s2'/>
    <form className='card col s8'>
    <div className='row'>

    <div className='input-field col s6'>
    <input id='book_tittle' type="text" className='validate'/>
    <label htmlFor='book_tittle'>Book_Tittle</label>
    </div>

    <div className='input-field col s6'>
    <input id='book_tittle' type="text" className='validate'/>
    <label htmlFor='book_author'>Book_Author</label>

    </div>
    </div>
    <div className='row'>

    <div className='input-field col s6'>
    <input id='book_tittle' type="text" className='validate'/>
    <label htmlFor='book_author'>Book_Category</label>
    </div>

    <div className='input-field col s6'>
    <input id='book_tittle' type="text" className='validate'/>
    <label htmlFor='book_author'>Book ISBN</label>
    </div>
    </div>

    <div className='row'>
    <div className='input-field col s12'>
    <textarea id='book_summary'className='materialise-textarea'></textarea>
    <label htmlFor='book_summary'>Book_Summary</label>
     </div>
     </div>

    <div className='row'>
    <span className='col s1'/>
    <button className='btn waves-effect col s10'>submit</button>
    <span className='col s1'/>
    </div>






    

</form>
<span className='col s2'/>
    </div>
  )
}

export default BookForm