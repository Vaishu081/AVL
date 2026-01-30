1. Time complexity of major operations in BST & need for balanced BSTs
Major operations in a BST

Search:

Average case: O(log n)

Worst case (skewed tree): O(n)

Insertion:

Average case: O(log n)

Worst case: O(n)

Deletion:

Average case: O(log n)

Worst case: O(n)

Traversal (inorder, preorder, postorder):

O(n)

Need for balanced BSTs

In an unbalanced BST, nodes may form a skewed structure (like a linked list).

This causes operations to degrade from O(log n) to O(n).

Balanced BSTs maintain height close to log n, ensuring efficient search, insertion, and deletion.

Examples: AVL Tree, Red-Black Tree
2. How AVL Tree detects imbalance

In an AVL tree, for every node, we calculate the Balance Factor (BF):

BF=Height of Left Subtree−Height of Right Subtree

A node is balanced if:

BF = −1, 0, or +1

A node is imbalanced if:

BF > 1 or BF < −1

After every insertion or deletion, AVL tree checks balance factors from the modified node up to the root to detect imbalance.
3. Four imbalance cases in AVL tree and their fixes
1. LL (Left-Left) Case

Insertion in left subtree of left child

Fix: Single Right Rotation

2. RR (Right-Right) Case

Insertion in right subtree of right child

Fix: Single Left Rotation

3. LR (Left-Right) Case

Insertion in right subtree of left child

Fix:

Left Rotation on left child

Right Rotation on root

4. RL (Right-Left) Case

Insertion in left subtree of right child

Fix:

Right Rotation on right child

Left Rotation on root

4. Compare AVL Trees with Red-Black Trees.

AVL Trees and Red-Black Trees are both self-balancing binary search trees, but they differ in the way they maintain balance. AVL Trees are strictly balanced, meaning the height difference between the left and right subtrees of any node is at most one. Due to this strict balancing, AVL Trees have a smaller height and provide faster search operations.

Red-Black Trees are loosely balanced and allow a greater height difference compared to AVL Trees. This results in a slightly taller tree, but insertion and deletion operations require fewer rotations, making them faster and more efficient for frequent updates.


5.Why Java uses Red-Black Tree instead of AVL Tree in TreeMap

TreeMap performs frequent insertions and deletions.

AVL trees require strict balancing, causing more rotations → higher overhead.

Red-Black Trees:

Maintain balance with fewer rotations

Offer faster insert and delete operations

Guarantee O(log n) performance

Hence, Java prefers Red-Black Trees for better overall performance and simplicity in implementation.
