import React from 'react';
import { css } from 'glamor';

const NewsListItems = ({item}) => {

  let news_item = css({
    padding:'20px',
    boxSizing:'border-box',
    borderBottom: '1px solid grey',
    ':hover':{
      color: 'red',
    }
  })

  let item_back = css({
    background: 'grey',
  })

  return (
    <>
        <div {...news_item} {...item_back} >
          <h3>{ item.title }</h3>
          <div>
            { item.feed }
          </div>
        </div>
    </>
    )
}

export default NewsListItems;
