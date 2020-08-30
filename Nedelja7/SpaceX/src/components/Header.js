const header = document.querySelector('#header')

export const Header = (info) => {
    const span = document.createElement('span')
    span.textContent = info.name

    header.append(span)
}