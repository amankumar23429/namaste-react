function Shimmer() {
  return (
    <div className="res-container">
      {new Array(10).fill("").map((ele, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
}
export default Shimmer;
