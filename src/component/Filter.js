import React from 'react'
import Form from './Form'

const Filter = () => {
  return (
   <div>
     

     <div className="container">
  <div className="col-md-3">
    <form className="xt-blog-form" role="search">
        <div class="input-group add-on">
          <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
          <div class="input-group-btn">
            <button className="btn btn-default" type="submit">
                <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
    </form>
  </div>
</div>


    </div>



  )
}

export default Filter
