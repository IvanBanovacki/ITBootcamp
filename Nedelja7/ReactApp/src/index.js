import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import Card from './components/Card'

const App = () => {
    return (
        <>
            <Form string={'KLIKNI'}></Form>
            <hr />
            <Card
                string={'Devil Emoji'}
                URL={'https://cdn.shopify.com/s/files/1/1061/1924/products/Devil_Emoji_Icon_7590c90c-e509-4534-bb4f-056c2c68c9e4_large.png?v=1571606089'} />
        </>
    )

}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)