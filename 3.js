function triangle (s) {
    let line = "" 
    for (i = s; i > 0; i--) { 
            for (j=1; j <= i ; j++){
                line += j+" "
            }line += "\n"
        }
    return console.log (line)
}

triangle (8)