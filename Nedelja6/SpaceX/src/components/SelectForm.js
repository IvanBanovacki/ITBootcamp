const selectLaunch = document.querySelector('#select-launch')

export const SelectForm = () => {
    for (let i = 2006; i <= 2020; i++) {
        if (i !== 2011) {
            const option = document.createElement('option')
            option.value = i
            option.textContent = i
            selectLaunch.append(option)
        }
    }
}