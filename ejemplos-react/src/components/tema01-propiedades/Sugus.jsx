// CSS
// CSS in JS
import './Sugus.css'


export const Sugus = ({color = 'yellow', sabor = 'limón'}) => {
// export const Sugus = (props) => {
  // console.log(props)
  // const {color, sabor} = props

  // color = 'black'

  // const color = props.color
  // const sabor = props.sabor

  // const color = 'yellow'
  // const sabor = 'limón'

  // const stylesSugus = {
  //   envoltorio: {
  //     // width: '100px',
  //     // height: '100px',
  //     // borderRadius: '5px',
  //     // border: '1px solid whitesmoke',
  //     // margin: '15px',
  //     background: color
  //   },
  //   texto: {
  //     // color: 'whitesmoke'
  //   }
  // }

  
  return (
    // <div className="sugus" style={stylesSugus.envoltorio}>
    <div className="sugus envoltorio" style={{ background: color }}>
      <p>{sabor}</p>
    </div>
  )
}