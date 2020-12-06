function square(n) {
    let out = "";
  
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < n; k++) {
        out += " *";
      }
      console.log(out);
      out = "";
    }
    return out;
  }  
  square(6);
  
  function emptySquare(n) {
    let out = "";
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= n; k++) {
        if (i == 1 || i == n || k == 1 || k == n) {
          out += " *";
        } else {
          out += "  ";
        }
      }
      console.log(out);
      out = "";
    }
    return out;
  }
  emptySquare(5);
  
  function triangle(n) {
    let out = "";
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < i + 1; k++) {
        out += "*";
      }
      console.log(out);
      out = "";
    }
  }  
  triangle(5);
  
  function emptyTriangle(n) {
    let out = "";
    for (let i = 0; i < n; i++) {
      for (let k = 0; k <= i; k++) {
        if (i == 0 || i == n - 1 || k == 0 || k == i) {
          out += "*";
        } else {
          out += " ";
        }
      }
      console.log(out);
      out = "";
    }
    return out;
  }  
  emptyTriangle(5);
  
  function sandboxClock(n) {
    let out = "";
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k < i; k++) {
        out += "  ";
      }
      for (let j = i; j <= n; j++) {
        out += " *  ";
      }
      console.log(out);
      out = "";
    }
  
    for (let i = n - 1; i >= 1; i--) {
      for (let k = 1; k < i; k++) {
        out += "  ";
      }
      for (let j = i; j <= n; j++) {
        out += " *  ";
      }
      console.log(out);
      out = "";
    }
    console.log(out);
    out = "";
  }  
  sandboxClock(7);
  