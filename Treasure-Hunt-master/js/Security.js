class Security {

    constructor(){
     this.input = createInput('Answer');
     this.input2 = createInput('Answer');
     this.input3 = createInput('Answer');
     this.button = createButton('check');
     this.button2 = createButton('check');
     this.button3 = createButton('check');
    }

    display(){
     
        this.input.position(100,85);
        this.input2.position(700,185);
        this.input3.position(100,285);

        this.button.position(100,115);
        this.button2.position(700,215);
        this.button3.position(100,315);

        this.button.mousePressed(()=>{
            if(system.authenticate(access1,this.input.value())){
                this.input.hide();
                this.button.hide();
                score+= 1;
            }
        })
        this.button2.mousePressed(()=>{
            if(system.authenticate(access2,this.input2.value())){
                this.input2.hide();
                this.button2.hide();
                score+= 1;
            }
        })
        this.button3.mousePressed(()=>{
            if(system.authenticate(access3,this.input3.value())){
                this.input3.hide();
                this.button3.hide();
                score+= 1;
            }
        })
    }
}