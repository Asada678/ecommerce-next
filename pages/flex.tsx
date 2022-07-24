import style from "./flex.module.css"


const Flex = () => {
  return (
    <div className={style.parent}>
      <div className={style.child}></div>
      <div className={style.child}></div>
      <div className={style.child}></div>
      <div className={style.child}></div>
    </div>
  )
}

export default Flex;