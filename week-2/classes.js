class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2*(this.width + this.height)
    }

    displayRect(){
        for(let i=1;i<=this.height;i++){
            let pattern='';
            for(let j=1; j<=this.width;j++){
                pattern = pattern + "*"
            }
            console.log(pattern);
        }
    }

}

const rect = new Rectangle(5,5);
console.log(rect.area());

rect.displayRect();