const shortenTitle = name => {
    const animeName = name.split(" ");
    const newAnimeName = `${animeName[0]} ${animeName[1]}`
    return newAnimeName
}

export {shortenTitle};