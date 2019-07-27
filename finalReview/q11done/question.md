Consider the following code.  What would be console logged?  Why? (50%)

Apple type is Clementine 
var value is apple and orange 

What would you change to address this issue (where the Apple type is
mis-represented in the last line below)? (50%)

you can change the orange.type to apple.type.  

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', orange.type)


