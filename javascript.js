class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    height(n) {
        return n ? n.height : 0;
    }

    balance(n) {
        return n ? this.height(n.left) - this.height(n.right) : 0;
    }

    rightRotate(y) {
        let x = y.left;
        let t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) return new Node(value);

        if (value < node.value)
            node.left = this.insert(node.left, value);
        else if (value > node.value)
            node.right = this.insert(node.right, value);
        else
            return node;

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        let bf = this.balance(node);

        if (bf > 1 && value < node.left.value)
            return this.rightRotate(node);

        if (bf < -1 && value > node.right.value)
            return this.leftRotate(node);

        if (bf > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        if (bf < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
}

const tree = new AVLTree();
let root = null;

document.getElementById("insertBtn").addEventListener("click", () => {
    const input = document.getElementById("valueInput");
    const value = parseInt(input.value);

    if (isNaN(value)) return;

    root = tree.insert(root, value);
    input.value = "";
    drawTree();
});

function drawTree() {
    const svg = document.getElementById("tree");
    svg.innerHTML = "";
    drawNode(root, 500, 40, 200);
}

function drawNode(node, x, y, gap) {
    if (!node) return;

    if (node.left) {
        drawLine(x, y, x - gap, y + 70);
        drawNode(node.left, x - gap, y + 70, gap / 1.5);
    }

    if (node.right) {
        drawLine(x, y, x + gap, y + 70);
        drawNode(node.right, x + gap, y + 70, gap / 1.5);
    }

    drawCircle(x, y, node.value);
}

function drawCircle(x, y, value) {
    const svg = document.getElementById("tree");

    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 18);
    c.setAttribute("class", "node");

    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("class", "text");
    t.textContent = value;

    svg.appendChild(c);
    svg.appendChild(t);
}

function drawLine(x1, y1, x2, y2) {
    const svg = document.getElementById("tree");

    const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", x1);
    l.setAttribute("y1", y1);
    l.setAttribute("x2", x2);
    l.setAttribute("y2", y2);
    l.setAttribute("class", "line");

    svg.appendChild(l);
}
