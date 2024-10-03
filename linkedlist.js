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
};

