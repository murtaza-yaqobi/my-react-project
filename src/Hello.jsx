function Hello({emoji}) {
  // props => عبارت از function elety می توان معلومات را از پرینت به چایلد روان کرد
  // destructuring function Hello({name, age, emoji})
  let emo = "☆*: .｡. o(≧▽≦)o .｡.:*☆";
  return (
    <>
      <h1>Hello, there this is my first react {emoji}</h1>
    </>
  );
}
export default Hello;
