const MovieCard =({movie})=>{
console.log('movie',movie)

return (



<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
  
        <strong>{movie.name}</strong>
      </div>
    </div>
    <div className="front">
      <div className="img">
        
        <img src={movie.image} />
      </div>
      <div className="front-content">
        <small className="badge">{movie.type}</small>
        <div className="description">
          <div className="title">
            <p className="title">
              <strong>{movie.rate}</strong>
            </p>
            <svg
              fillRule="nonzero"
              height="15px"
              width="15px"
              viewBox="0,0,256,256"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                style={{ mixBlendMode: "normal" }}
                textAnchor="none"
                fontSize="none"
                fontWeight="none"
                fontFamily="none"
                strokeDashoffset={0}
                strokeDasharray=""
                strokeMiterlimit={10}
                strokeLinejoin="miter"
                strokeLinecap="butt"
                strokeWidth={1}
                stroke="none"
                fillRule="nonzero"
                fill="#20c997"
              >
                <g transform="scale(8,8)">
                  <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                </g>
              </g>
            </svg>
          </div>
          <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
export default MovieCard