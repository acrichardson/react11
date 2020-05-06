import React from 'react';
import NewsListItems from './news_list_items'

const NewsList = (props) => {

  return (
    <>
      {props.news.map((item)=>(
        <div>
          <h3>{ item.title }</h3>
          <div>
            { item.feed }
          </div>
        </div>
      )) }

    </>
    )
}

export default NewsList;
