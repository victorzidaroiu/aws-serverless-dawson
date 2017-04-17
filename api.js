export function greet (event) {
    const name = event.params.path.name
    return `Hey ${name}, you look awesome!`
}
greet.api = {
    path: 'greet/{name}'
}
