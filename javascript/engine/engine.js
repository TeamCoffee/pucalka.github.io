class Engine{
    constructor(width,height,options){
        this.width=width;
        this.height=height;
        this.canvas=document.getElementById(options.canvasId)
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        this.context=this.canvas.getContext(options.contextType);
        this.updateCallbackTime=options.updateCallbackTime;
        this._requestAnimationFrameFunc=window.requestAnimationFrame ||
                                        window.mozRequestAnimationFrame ||
                                        window.webkitRequestAnimationFrame ||
                                        window.msRequestAnimationFrame ||
                                        function (callback) { setTimeout (callback, 1000 / 30); };
        this._RAF.bind(window);
    }
    get width(){
        return this._width;
    }
    set width(value){
        if(value<0){
            throw new Error("Width should be positive");
        }
        this._width=value;
    }
    get height(){
        return this._height;
    }
    set height(value){
        if(value<0){
            throw new Error("Width should be positive");
        }
        this._height=value;
    }
    get canvas(){
        return this._canvas;
    }
    set canvas(value){
        if(typeof(value)=="undefined"){
            throw new Error("Canvas should not be undefined");
        }
        this._canvas=value;
    }
    get context(){
        return this._context;
    }
    set context(value){
        if(typeof("value")=="undefined"){
            throw new Error("Context should not be undefined");
        }
        this._context=value;
    }
    get updateCallbackTime(){
        return this._updateCallbackTime;
    }
    set updateCallbackTime(value){
        if(typeof(value)=="undefined"){
            this._updateCallbackTime=40;
            return;
        }
        if(typeof(value)!="number"){
            throw new Error("UpdateCallbackTime should be number");
        }
        if(value<0){
            throw new Error("updateCallbackTime should be positive");
        }
        this._updateCallbackTime=value;
    }
    get draw(){
        return this._draw;
    }
    set draw(value){
        if(typeof(value)!="function"){
            throw new Error("Draw should be function");
        }
        this._draw=value;
    }
    get update(){
        return this._update;
    }
    set update(value){
        if(typeof(value)!="function"){
            throw new Error("Update should be function");
        }
        this._update=value;
    }
    _updateFunc(){
        if(this._updateActive!=true){
            return;
        }
        this.update();
        setTimeout(this._updateFunc,this.updateCallbackTime);
    }
    _drawFunc(){
        if(this._drawActive!=true){
            return;
        }
        this.draw();
        this._RAF.call(window,this._drawFunc,this._requestAnimationFrameFunc);
    }
    _RAF(callback,requestAnimationFrame){
        requestAnimationFrame(callback);
    }
    startUpdate(){
        this._updateActive=true;
        this._updateFunc=this._updateFunc.bind(this);
        this._updateFunc();
    }
    stopUpdate(){
        this._updateActive=false;
    }
    startDraw(){
        this._drawActive=true;
        this._drawFunc=this._drawFunc.bind(this);
        this._drawFunc();
    }
    stopDraw(){
        this._drawActive=false;
    }
    start(){
        this.startUpdate();
        this.startDraw();
    }
    
    
}