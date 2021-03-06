import React from 'react';
import NewsListItems from './news_list_items';

const NewsList = (props) => {

  const news = props.news.map((item, i)=>(
    <NewsListItems item={item} key={item.id}/>
    ))


  return(
    <>
      { news }
      { /*props.children*/ }
    </>
    )
}

export default NewsList;
