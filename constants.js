const moves={
    N:{
        axis:'y', 
        change:1
    }, 
    S:{
        axis:'y', 
        change:-1
    }, 
    W:{
        axis:'x', 
        change:-1
    }, 
    E:{
        axis:'x', 
        change:1
    }

}
const turns={
    N:{
        L:'W',
        R:'E'
    },
    S:{
        L:'E',
        R:'W'
    },
    W:{
        L:'S',
        R:'N'
    },
    E:{
        L:'N',
        R:'S'
    }
}

module.exports={moves, turns}