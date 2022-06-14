import album from "./data";
export function Disc({ index }) {
    const coverImg = album[index].coverImg;
    const name = album[index].name;
    const tracks = album[index].tracks;
    return (
      <div className="div-disc">
        <img className="medium-pic" src={coverImg} alt={name} />
        <ol>
          {tracks.map((disc, index) => (
            <li>{disc}</li>
          ))}
        </ol>
      </div>
    );
  }