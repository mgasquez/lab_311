import album from "./data";
export function AllDisc({index, setIndex}) {
    return (  
      <>
      {album.map((disc) => (
      <div className="div-disc" onClick={() => setIndex(disc.id)} >
        <img className="small-pic" src={disc.coverImg} alt={disc.name}  />
        <span>{disc.name}</span>
      </div>
        ))}
      </>
    );
  }