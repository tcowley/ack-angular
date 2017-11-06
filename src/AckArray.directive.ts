import { EventEmitter, Output, Input, Directive } from '@angular/core'

@Directive({
  selector:'ack-array'
}) export class AckArray {
  
  @Input() idKey
  
  @Input() ref
  @Output() refChange = new EventEmitter()
  
  //convenient memory for current page, may not be needed
  //@Input() page:number = 0
  //@Output() pageChange:EventEmitter<number> = new EventEmitter()

  @Input() pageAt:number = 0
  @Input() pages = []
  @Output() pagesChange = new EventEmitter()

  @Input() array:any[]
  @Output() arrayChange = new EventEmitter()

  //an system of creating an object by keys of array nodes
  @Input() keyMap:any = {}
  @Output() keyMapChange = new EventEmitter()

  ngOnInit(){
    setTimeout(()=>{
      this.pages = this.pages || []
      this.createPages()
      this.buildMap()
      this.refChange.emit(this)
    }, 0)
  }

  ngOnChanges(changes){
    if(this.pages && (changes.pageAt || changes.array)){
      if(changes.array)setTimeout(()=>this.buildMap(), 0)
      setTimeout(()=>this.createPages(), 0)
    }
  }

  buildMap(){
    if(!this.keyMapChange.observers.length || !this.array){
      return this.keyMapChange.emit(this.keyMap={})
    }

    this.keyMap={}
    for(let x=this.array.length-1; x >= 0; --x){
      let key = this.getItemId(this.array[x])
      this.keyMap[ key ] = this.array[x]
    }
    this.keyMapChange.emit(this.keyMap)
  }
    
  only(item){
    this.array.length = 0
    this.array.push(item)
    this.arrayChange.emit(this.array)
    this.buildMap()
  }

  createPages(){
    this.pages.length = 0

    if(!this.array || !this.array.length){
      this.pages[0] = this.array
      this.pagesChange.emit(this.pages)
      return
    }

    let pos = 0
    const last = this.array.length
    this.pages.push([])
    for(let x=0; x < last; ++x){
      this.pages[pos].push( this.array[x] )

      if( this.pages[pos].length==this.pageAt && x<last-1 ){
        this.pages.push([])
        ++pos
      }
    }

    this.pagesChange.emit(this.pages)
  }

  //looks up id or the item itself is an ID
  getItemId(item, itemIndexName?:string):any{
    itemIndexName = itemIndexName || this.idKey
    return itemIndexName ? item[itemIndexName] : item
  }

  getCompareArray(){
    if(this.array && this.idKey){
      return this.array.map(item=>item[this.idKey])
    }

    return this.array || []
  }

  selected(item){
    return this.itemIndex(item) >= 0 ? true : false
  }

  itemIndex(item, itemIndexName?:string){
    const array = this.getCompareArray()
    const itemId = this.getItemId(item, itemIndexName)
    
    for(let x=array.length-1; x >= 0; --x){
      if(itemId==array[x]){
        return x
      }
    }

    return -1
  }

  toggle(item){
    const index = this.itemIndex(item)

    if(index>=0){
      return this.splice(index)
    }
    
    return this.push( item )
  }

  push(item){
    this.param().push(item)
    this.createPages()
    this.buildMap()
    return this
  }

  unshift(item){
    this.param().unshift(item)
    return this
  }

  splice(x:number, y=1){
    this.param().splice(x,y)
    this.createPages()
    this.buildMap()
    return this
  }

  param(){
    if(!this.array)this.arrayChange.emit( this.array=[] )
    return this.array
  }
}