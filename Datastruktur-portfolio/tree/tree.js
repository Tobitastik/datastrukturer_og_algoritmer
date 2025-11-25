class Node {
    constructor(values, parent = null) {
        this.values = values;
        this.parent = parent;
        this.childNodes = [];
    }

    firstChild() {
        return this.childNodes[0];
    }

    lastChild() {
        return this.childNodes[this.childNodes.length - 1];
    }

    appendChild(child) {
        child.parent = this;
        this.childNodes.push(child);
    }

    removeChild(child) {
        const index = this.childNodes.indexOf(child);
        if (index !== -1) {
            this.childNodes.splice(index, 1);
            child.parent = null;
        }
    }

    replaceChild(newChild, oldChild) {
        const index = this.childNodes.indexOf(oldChild);
        if (index !== -1) {
            oldChild.parent = null;
            newChild.parent = this;
            this.childNodes[index] = newChild;
        }
    }

    hasChildNodes() {
        return this.childNodes.length > 0;
    }
}

export class Tree {
    constructor(rootValue) {
        this._root = new Node(rootValue);
    }

    root() {
        return this._root;
    }

    printTree(node = this._root, depth = 0) {
        if (!node) return;

        console.log("  ".repeat(depth) + node.values);

        node.childNodes.forEach(child => 
            this.printTree(child, depth + 1)
        );
    }


    addValue(value, parent = this._root) {
        const newNode = new Node(value);
        parent.appendChild(newNode);
        return newNode;
    }

    findValue(value, node = this._root) {
        if (node.values === value) return node;

        for (let child of node.childNodes) {
            const result = this.findValue(value, child);
            if (result) return result;
        }

        return null;
    }

    remove(value, node = this._root) {
        for (let child of node.childNodes) {
            if (child.values === value) {
                node.removeChild(child);
                return true;
            } else {
                if (this.remove(value, child)) return true;
            }
        }
        return false;
    }
}