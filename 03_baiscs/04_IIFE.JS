// Immediately Invoked Function Expression (IIFE)

(function chai() {                      // Named IIFE
    console.log("DB CONNECTED");
    
})();                                   // if want to run to IIFE then, not to forget ;

((name) => {                            // Unamed IIFE
    console.log(`HI USER, ${name}`);
    
})("konain");