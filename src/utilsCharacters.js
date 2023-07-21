export const characterNumber = (urls)=>{
    const arrayNumbers = urls.map((url)=>{
        const lastSlashIndex = url.lastIndexOf('/');
        const number = parseInt(url.substring(lastSlashIndex + 1));
        return number
    }

    )

    return arrayNumbers
}

export default characterNumber