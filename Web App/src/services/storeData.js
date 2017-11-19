let instance = null;

class StoreData{  
    constructor() {
        if(!instance){
            this.items = [] ;   
            instance = this;
        }    
        return instance;
      }
    addItem(item){
        let storeItem = {...item, quantity: 1};        
        for(let i in this.items){        
            if(this.items[i].id === item.id){
                this.items[i].quantity = this.items[i].quantity+1;
                return;
            }           
        }        
        this.items.push(storeItem);
    } 
    printItems(){
        console.log(this.items);
    } 
    getItems(){
        return this.items;
    }
    removeItem(id){
        for(let i in this.items){        
            if(this.items[i].id === id){
                let q = this.items[i].quantity;
                if(q>1){
                   this.items[i].quantity = q-1;
                }
                else{
                    this.items.splice(i, 1);        
                }
                break;                
            }           
        } 
    }
    getItemCount(){
        let itemCount = 0;
        for(let i in this.items){  
            itemCount = itemCount + this.items[i].quantity;                          
        } 
        return itemCount;
    }
}
const store = new StoreData();
export default store;