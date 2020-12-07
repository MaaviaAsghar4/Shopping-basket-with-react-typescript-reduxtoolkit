import {createServer} from 'miragejs'

const cartItem:any[] = []

const Server = () => {
    createServer({
        routes() {
            this.get('/cartitem', ()=>{
                return cartItem;
            })

            this.post('/cartitem',(schema,req):any => {
                let newItem = JSON.parse(req.requestBody)
                cartItem.push(newItem)
                console.log(cartItem)
            })
        },
    })
}

export default Server