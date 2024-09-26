export interface TreeNode {
    id: number;
    name: string;
    details?: string;
    children?: TreeNode[];
}

export interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
    details: string;
    id: number;
}

export const TREE_DATA: TreeNode[] = [
    {
        id: 1,
        name: 'Fruits',
        details: 'Category: Fruits',
        children: [
            {
                id: 2,
                name: 'Apple',
                details: 'Type: Fruit',
                children: [
                    {
                        id: 3,
                        name: 'Fuji Apple',
                        details: 'Subtype: Apple',
                        children: [
                            { id: 4, name: 'Small Fuji', details: 'Size: Small' },
                            { id: 5, name: 'Large Fuji', details: 'Size: Large' }
                        ]
                    },
                    {
                        id: 6,
                        name: 'Granny Smith',
                        details: 'Subtype: Apple',
                        children: [
                            { id: 7, name: 'Small Granny Smith', details: 'Size: Small' },
                            { id: 8, name: 'Large Granny Smith', details: 'Size: Large' }
                        ]
                    }
                ]
            },
            { id: 9, name: 'Banana', details: 'Type: Fruit' },
            { id: 10, name: 'Orange', details: 'Type: Fruit' }
        ]
    },
    {
        id: 11,
        name: 'Vegetables',
        details: 'Category: Vegetables',
        children: [
            {
                id: 12,
                name: 'Green Vegetables',
                details: 'Type: Vegetables',
                children: [
                    {
                        id: 13,
                        name: 'Broccoli',
                        details: 'Subtype: Green Vegetable',
                        children: [
                            { id: 14, name: 'Small Broccoli', details: 'Size: Small' },
                            { id: 15, name: 'Large Broccoli', details: 'Size: Large' }
                        ]
                    },
                    {
                        id: 16,
                        name: 'Spinach',
                        details: 'Subtype: Green Vegetable',
                        children: [
                            { id: 17, name: 'Small Spinach', details: 'Size: Small' },
                            { id: 18, name: 'Large Spinach', details: 'Size: Large' }
                        ]
                    }
                ]
            },
            {
                id: 19,
                name: 'Root Vegetables',
                details: 'Type: Vegetables',
                children: [
                    {
                        id: 20,
                        name: 'Carrot',
                        details: 'Subtype: Root Vegetable',
                        children: [
                            { id: 21, name: 'Small Carrot', details: 'Size: Small' },
                            { id: 22, name: 'Large Carrot', details: 'Size: Large' }
                        ]
                    },
                    {
                        id: 23,
                        name: 'Potato',
                        details: 'Subtype: Root Vegetable',
                        children: [
                            { id: 24, name: 'Small Potato', details: 'Size: Small' },
                            { id: 25, name: 'Large Potato', details: 'Size: Large' }
                        ]
                    }
                ]
            }
        ]
    }
];