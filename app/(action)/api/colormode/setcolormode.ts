"uae client";

export function ColorMode(mode? : number){

    if(mode == 1){
        return "lights";
    }else{
        return "darks";
    }
    
}

export function thememode(){
    const color = ColorMode();
    return color;
}