function make_shirt(size = "small", message = "I like coding"){
    console.log(`Size of the shirt should be ${size}. And should contain a message ${size === "large" || size === "medium"? "I like coding" : message}`)
}

make_shirt("medium", "work hard for your future")