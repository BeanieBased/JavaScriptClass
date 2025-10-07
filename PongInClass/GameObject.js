class GameObject
{
    constructor()
    {
        this.x= 100
        this.y = 100
        this.w = 100
        this.h = 100
        this.color = 'blue'
        this.vx = 0
        this.vy = 0
    }
    
    render()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    move()
    {
        this.x += this.vx
        this.y += this.vy

        if(this.y > 800)
        {
            this.y = -100
        }
    }
}