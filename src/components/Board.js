import React from 'react';
import Square from './Square'

class Board extends React.Component {
  renderSquare(i) {
    return <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)}
    />; 
    // mengoper data prop value & prop onClick ke Square Component
  }

  render() {
  // merender 9 Square
    return (
      <div className='board'>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board;

// documentation : 
// state dari Board telah dinaikan ke Game component. sebelumnya :
// ..
//     constructor(props) {
//       super(props);
//       this.state = {
//         squares: Array(9).fill(null),
//       };
//     }

//     ..
// ..

// renderSquare(i) method sebelumnya :
// ..
//     ..

//     renderSquare(i) {
//         return <Square value={i} />;
//     }

//     ..
// ..

// lalu menjadi :
// ..
//     ..

//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.state.squares[i]} 
                // prop value sekarang membawa state
//                 onClick={() => this.handleClick(i)}
                // Karena state dianggap sebagai private di dalam suatu komponen, 
                // kita tidak dapat mengubah state Board melalui Square secara langsung. Harus melalui Board.
                // Sehingga kita memberi Fungsi ini. Agar dipanggil ketika komponen Square diklik. 
//             />
//         );
//     }

//     ..
// ..

// di Board component sebelumnya terdapat fungsi handleClick(), kemudian dinaikan ke Game. code sebelumnya :
// ..
//     ..

//     handleClick(i) {
//         const squares = this.state.squares.slice();
        // slice() digunakan utk menerapkan immutability
//         squares[i] = 'X';
//         this.setState({squares: squares});
//     }

//     ..
// ..

// constructor pada Board dirubah menjadi :
// ..
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             xIsNext: true, // untuk menentukan siapa yang akan membuat langkah selanjutnya
//         };
//     }
// ..

// fungsi handleClick dirubah menjadi :
// ..
//     ..
    
//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         squares[i] = this.state.xIsNext ? 'X' : 'O'; 
//         this.setState({
//             squares: squares,
//             xIsNext: !this.state.xIsNext,
//         });
//     }

//     ..
// ..

// seluruh code pada Board component sebelumnya :
// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             xIsNext: true,
//         };
//     }

//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             squares: squares,
//             xIsNext: !this.state.xIsNext,
//         });
//     }

//     renderSquare(i) {
//         return (
//             <Square
//             value={this.state.squares[i]}
//             onClick={() => this.handleClick(i)}
//             />
//         );
//     }

//     render() {
//         const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    
//         return (
//             <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 {this.renderSquare(0)}
//                 {this.renderSquare(1)}
//                 {this.renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(3)}
//                 {this.renderSquare(4)}
//                 {this.renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(6)}
//                 {this.renderSquare(7)}
//                 {this.renderSquare(8)}
//             </div>
//             </div>
//         );
//     }
// }
