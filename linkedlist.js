//node constructor
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    //list constructor
    constructor() {
        this.head = null;
    }
    append(data) {
        //create node
        const newNode = new Node(data);
        //if list is empty, assign this node to head
        if (this.head == null) {
            this.head = newNode;
        } else {
            //traveses the list until it reaches last node and appends new node
            //start at head
            let current = this.head;
            //search until there is a node with a null next
            while (current.next !== null) {
                //move to next node
                current = current.next;
            }
            //whn the while is finished ie when there is a next = null, add this new node as the next
            current.next = newNode;
        }
    }
    preend(data){
        //create node
        const newNode = new Node(data);
        //if theres a head already, newNode.next should be that node (works for null too)
        newNode.next = this.head;
        //change head reference to this node
        this.head = newNode;
    }
    size(){
        let current = this.head;
        count = 0;
        if (this.head == null) {return count}
        count =1;
        while (current.next !== null) {
            count++;
        }
        return count
    }
    headFind(){
        return this.head
    }
    tailFind(){
        let current = this.head;
            //search until there is a node with a null next
            while (current.next !== null) {
                //move to next node
                current = current.next;
            }
        return current
    }
    at(index){
        //index 0
        if (index == 0){return this.head}
        let current = this.head
        //loop across list until index and return node
        for(let i=0;i<index;i++){
            current = current.next;
        }
        return current
    }
    pop(){
        let current = this.head;
            //search while nodes have a next
            while (current.next !== null) {
                //if two after current is null then change next node to empty next
                if(current.next.next == null){
                    current.next = null;
                    return
                }
                //otherwise move to next node
                current = current.next;
            }
    }
    contains(valueToFind){
        let current = this.head;
        //search while nodes have values
        while (current.value !== null) {
            if(current.value == valueToFind){
                return true
            }
            //otherwise move to next node
            current = current.next;
        }
        return false
    }
    find(valueToFind){
        let current = this.head;
        let index = 0;
        //search while nodes have values
        while (current.value !== null) {
            if(current.value == valueToFind){
                return index
            }
            //otherwise move to next node
            current = current.next;
            index++;
        }
        return null

    }
};

