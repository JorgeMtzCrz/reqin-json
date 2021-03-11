export default function capitalize(string) {
    const letterUp = string.charAt(0).toUpperCase()
    const titleSlice = string.slice(1)
    const title = letterUp + titleSlice
    return title
}