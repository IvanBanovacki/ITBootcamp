import { LaunchList } from './components/LaunchList'
import { getPastLaunches, getCompanyInfo, getPastLaunchesByYear } from './service'
import { Header } from './components/Header'
import { SelectForm } from './components/SelectForm'

const app = document.querySelector('#app')
const selectLaunch = document.querySelector('#select-launch')


getCompanyInfo().then(res => {
    Header(res.data)
    SelectForm()
    getPastLaunches().then(res => {
        app.appendChild(LaunchList(res.data))
    })
})

selectLaunch.addEventListener('change', (e) => {
    e.preventDefault()
    app.innerHTML = ''
    getPastLaunchesByYear(selectLaunch.value).then(res => {
        app.appendChild(LaunchList(res.data))
    })
})

