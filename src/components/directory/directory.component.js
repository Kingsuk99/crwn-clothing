import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory =({sections})=>(

  <div className='directory-menu'>
  {/* {sections.map(({title,imageUrl,size,id,linkUrl})=>{
      return(<MenuItem  key ={id} title={title} size={size} imageUrl={imageUrl} linkUrl={linkUrl}/>)
  })} */}

{/* Can also be written as  */}
{sections.map(({id,...otherSectionProps})=>{
      return(<MenuItem  key ={id} {...otherSectionProps}/>)
  })}

</div>

)
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);