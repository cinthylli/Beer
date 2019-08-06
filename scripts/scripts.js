class burbuja{
    constructor(x,y,ctx, radioMinimo, radioMaximo){
        this.x = x;
        this.y = y;
        this.z = getRndInteger(1 , 3); ;
        this.r = getRndInteger(radioMinimo, radioMaximo);
        this.ctx = ctx;
        this.estaCreciendo = true;
        this.orientacion = getRndInteger(-1,1); 

    }

    Crecer(tasaCrecimiento){
        if(this.estaCreciendo){
            this.r += tasaCrecimiento;
        }
    }

    mostrar(){
        ctx.iniciarCamino();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    ascender(velocidad){

    }
}


function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function distancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
}