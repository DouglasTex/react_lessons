const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyButtom() {
  return <button className="butao">Aperte para nada acontecer</button>;
}

export default function Myapp() {
  return (
    <>
      <h1>Hedy Lamarr</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          
        }}
      />
      <MyButtom />
    </>
  );
}
