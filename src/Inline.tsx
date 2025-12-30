import styles from "./App.module.css";
import "./myStyles.css";
function Inline(props) {
  // const heading = {
  //   fontSize: "100px",
  //   color: "blue",
  // };
  // console.log(props.status);

  const styleCss = props.status ? "primary" : "secondary";
  console.log(styleCss);
  return (
    <div>
      {/* <h1 style={heading}>This is Heading</h1> */}
      <h1 className={styleCss}>
        This is conditional Heading, So It will use Ternary Operator
      </h1>
      <h2 style={{ color: "red", backgroundColor: "yellow" }}>
        This is an actual Inline Css
      </h2>
      <h1 className={styles.title}>Hello This is module like css</h1>
    </div>
  );
}

export default Inline;
