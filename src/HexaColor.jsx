export default function HexaColor() {
  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };
  const bgColor = hexaColor();
  const styles = {
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "100%",
    border: "none",
    backgroundColor: bgColor,
    marginTop: "5px",
    color: "#f9f9f9",
  };

  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
}
