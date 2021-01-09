/*
|h---o--|
|-e-l---|    
|--l----|    
*/

const railFenceCipher = function(word, depth){
    //let depth = 3;
  
  let checks = depth*word.length;
  var matrix = [];
  let a = 0;
  let i = 0;
  let b = 0;
  matrix[0] = [];
  // let mark = true;
  let count = 0;
  while(a < checks){
    for(i = 0; i < word.length; i++){
      matrix[b].push('-');
      a++;
      count++;
    }
    if(a === checks) break;
    b++;
    matrix[b] = [];
  }
  
  let m = 0;
  let r = 0;
  
  while(r <= depth-1){
    matrix[r][m] = word[m];
    if(m == word.length-1) 
    break;
    m++;
      if(r+1 == depth){
      for(r = depth-2; r >= 0; r--){
        matrix[r][m] = word[m];
        if(m == word.length-1) 
        break;
        m++;
      }
      r++;
    }
    r++;
  }
  
  this.Matrix = function(){
    // console.log(matrix);
    matrix.forEach(element => {
      element.forEach(elmt => {
        process.stdout.write(elmt);
      });
      process.stdout.write('\n');
    });
  }

  
  this.Encoded = function(){
    let encoded = '';
    for(let i = 0; i <= depth-1; i++){
      matrix[i].forEach(function(val){
        if(val != '-')
        //console.log(val);
        encoded += val;
    });
  }
  return encoded;
  }
  
  this.DecodedExternal = function(word){
    let m = 0;
    let r = 0;
    
      while(r <= depth-1){
        matrix[r][m] = '1';
        if(m == word.length-1) 
        break;
        m++;
         if(r+1 == depth){
          for(r = depth-2; r >= 0; r--){
            matrix[r][m] = '1';
            if(m == word.length-1) 
              break;
            m++;
          }
          r++;
        }
        r++;
      }
  
      let c = 0;
      let decoded = '';
      for(let y = 0; y <= depth-1; y++){
        matrix[y].forEach(function(val, index){
          if(val == '1'){
          matrix[index] = word[c];
          c++;
          }
        })
      }
  
      matrix.forEach(function(val){
        decoded += val;
      });
      return decoded;

  
  }
    
}


// initializing with plain text and depth
var rfc = new railFenceCipher('hello computing in java', 8);
// to get the cipher text
let rfcEncoded = rfc.Encoded();
// console.log(rfcEncoded);

// provides a visual
rfc.Matrix();
// to decode some cioher text. Note that depth must be initialized before decoding
let rfcDecoded = rfc.DecodedExternal('hgen liiltnou  pjcmaaov');
// console.log(rfcDecoded);