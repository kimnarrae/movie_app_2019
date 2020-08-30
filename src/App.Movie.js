import React from 'react';
import propTypes from "prop-types";

const movie = [
  {id:"a",name:"Action",picture:"http://www.bzeronews.com/news/photo/201907/406548_582092_4132.jpg",rating:4},
  {id:"b",name:"Romance",picture:"https://ssl.pstatic.net/mimgnews/image/117/2006/09/27/200609271416271120_1.jpg?type=w540",rating:3},
  {id:"c",name:"Animation",picture:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjhfMTAy%2FMDAxNTg4MDUwMzMxNTA1.M96YgKYeqNuifdHva-5JHgLwcNVSlNFsAJJkFnaK3gAg.ui3e3qcaW_m6dWThPhvBsUUOqSjgrCbFFnKp1ZwNT8Qg.JPEG.gundlo1%2F%25B1%25A4%25C1%25D6%25BE%25D6%25B4%25CF%25B8%25DE%25C0%25CC%25BC%25C713.jpg&type=sc960_832",rating:2}
];

function Movie({ name, picture, rating }){
  return (
    <div>
      <h1>I like {name} : {rating}</h1>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Movie.propTypes = {  //type 체크 
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired //rating 형식 : number , isRequired :  필수 값 / proTypes.number  :: number이거나 null이라는 뜻
}


function AppMovie(){
  return (
    <div>
        <h1>Hello Movie</h1>
        {movie.map(dish => (
            <Movie key={dish.id} name={dish.name}  picture={dish.picture} rating={dish.rating} />
        ))}
       
    </div>
  );
}

export default AppMovie;
