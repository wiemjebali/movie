import { useState } from 'react';
import './App.css';
import Filter from './component/Filter';
import Form from './component/Form';
import MovieList from './component/MovieList';

function App() {
const[MovieData,SetMovieData]=useState([
    {
      id: Math.random(),
      image:
        'https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg',
      rating: 4,
      name: "Devil's Mile",
      date: '2014',
      type: 'Action | Crime',
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
        isDone:false
      },
    {
      id: Math.random(),
      image:
        'https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg',
      rating: 5,
      name: 'Once Upon A Time In The west',
      date: '1968',
      type: 'Western',
      description:
        'A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.',
        isDone:false},

{
      id: Math.random(),
      image:
        'https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg',
      rating: 4,
      name: 'Taxi Driver',
      date: '1976',
      type: 'Crime | Drama',
      description:
        'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.',
        isDone:false},
{
      id: Math.random(),
      image:
        'https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg',
      rating: 4,
      name: 'Mad Max',
      date: '1979',
      type: 'Action | Adventure',
      description:
        'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.',

        isDone:false  },
    {
      id: Math.random(),
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg',
      rating: 3,
      name: 'Little Miss Sunshine',
      date: '2006',
      type: 'Comedy | Drama',
      description:
        'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.',

        isDone:false  },
    {
      id: Math.random(),
      image:
        'https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg',
      rating: 5,
      name: 'KILL BILL: VOL. 1',
      date: '2003',
      type: 'Action',
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      details: 'https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl',
      isDone:false
    },
  

])


const addmovie=(newMovie)=>{
SetMovieData([...MovieData,newMovie])

}

  return (
<div>





<>
  <section className="container">
    <nav>
      <span className="logo">
        <span>
          FEM<span className="different-color">ovies</span>
        </span>
      </span>
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>My list</li>
      </ul>
      <div className="user">
        <img src="https://cdn.mirchistatus.com/siteuploads/images/images8/3866/thumb/new-white-rose-dp-image-full-hd_xlrg.jpg?time=1555927332" />
      </div>
      <span className="dropdown-icon">
        <img src="https://png.pngtree.com/svg/20161212/952e94189c.svg" />
      </span>
    </nav>
    </section>

<Filter></Filter>




    <div className="main-movie">
      <div className="movie-content">
        <p>12 (Brazil) 2017 ‧ Documentary ‧ 1h 13m</p>
        <p>
          The daily life of two neighbors and friends who live in the outskirts
          of Belo Horizonte. On the one hand, Andreia begins to build her house.
          On the other, Leid and the children are waiting for the husband, who
          is in prison. In common, the need to deviate from the dangers of the
          war of trafficking and the strategy to avoid the tragedies brought
          about as a consequence.
        </p>
      </div>
      <img
        src="https://i.ytimg.com/vi/beZ3FDktDg8/maxresdefault.jpg"
        alt="Baronesa (Brazilian movie, 2018)"
      />
    </div>
    <h2>Trending now</h2>
  
  
</>

<MovieList MovieData={MovieData}></MovieList>


<Form  addmovie={addmovie} />


</div>
 
 )
 }

export default App;
