class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}

class Linklist {
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0
    }

    insert(val) {
       let node=new Node(val)
         if (!this.head) {
            this.head= node
            this.tail=this.head
         } else{
             this.tail.next=node;
             this.tail=node
         }
            this.length++
            return this;
    }

    remove() {
       if(!this.head) {
           return undefined
       } else{
          let current =this.tail
          let newTail=current

          while(current.next) {
            this.tail=newTail
            this.tail.next=null
          }
          this.length--
          return currentcl
       }
    }
}

console.clear()
let linkedlist =new Linklist
console.log(linkedlist.insert(39))
console.log(linkedlist.insert(30))
console.log(linkedlist.insert(45))
console.log(linkedlist.insert(29))