let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)

let timer = setInterval(main, 1000/60)

let box = []

for(let i=0; i<50; i++)
{
    box[i] = new GameObject()
    box[i].x = Math.random()*c.width
    box[i].y = Math.random()*c.height
    box[i].vy = Math.random()*(15-5)+5
    box[i].w = box[i].vy
    box[i].h = box[i].w
}

function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    for(let i=0; i<box.length; i++)
    {
        box[i].render()
        box[i].move()
    }

}