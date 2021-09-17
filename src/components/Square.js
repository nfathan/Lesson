function Square(props) {
// merender sebuah button
  return (
    <button 
      className='square' 
      onClick={props.onClick}  
    >
      {props.value} 
    </button>   
    // menampilkan nilai(data) yang dioper oleh Board
  )
}

export default Square;

// documentation : 
// state yang awalnya di Square component telah dinaikan ke Board component. code sebelumnya :
// ..
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     ..
// ..

// karena menggunakan function components, this.props dirubah menjadi props. code sebelumnya :
// ..
//     ..

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.setState({value: 'X'})}
//             >
//                 {this.state.value}
//             </button>
//         );
//     }
// ..
// Awalnya, kita mengoperkan prop value dari Board untuk menampilkan angka 0 sampai 8 di setiap Square. 
// Namun Pada langkah ini kita menggantikan angka dengan “X” yang ditentukan oleh state dari Square itu sendiri. 
// Sehingga Square saat ini mengabaikan prop value yang dioperkan oleh Board.

// Square component cukup menggunakan function components, karena  
// hanya berisi render method dan tidak memiliki state lagi. code sebelumnya :
// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//         return (
//             <button
//                  className="square"
//                  onClick={() => this.setState({value: 'X'})}
//             >
//                  {this.state.value}
//             </button>
//         );
//     }
// }
