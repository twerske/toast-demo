export interface Toast {
    bread: string;
    toasted?: number;
    buttered?: boolean;
    jam?: string[];
    toppings?: string[];
    sliced?: SliceStyle;
}

export enum SliceStyle {
  REGULAR,
  DIAGONAL,
  NONE
}

export const TOASTS: Toast[] = [
    {
      "bread": "Sourdough",
      "toasted": 3,
      "sliced": SliceStyle.NONE,
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ['Huckleberry', 'Rhubarb'],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "toasted": 3,
      "sliced": SliceStyle.REGULAR,
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado",
        "Salt"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "sliced": SliceStyle.DIAGONAL,
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Avocado",
        "Pepper",
        "Salt"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "toasted": 3,
      "sliced": SliceStyle.DIAGONAL,
      "toppings": null
    },
    {
      "bread": "Rye",
      "toasted": 6,
      "jam": ['Strawberry', 'Blueberry', 'Lemon Curd'],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "toasted": 6,
      "jam": ["Rhubarb"],
      "sliced": SliceStyle.REGULAR,
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "toasted": 6,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ['Huckleberry', 'Rhubarb'],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Rhubarb"],
      "sliced": SliceStyle.DIAGONAL,
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Avocado",
        "Pepper",
        "Salt"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado",
        "Pepper"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado",
        "Salt"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "sliced": SliceStyle.DIAGONAL,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "toasted": 3,
      "sliced": SliceStyle.NONE,
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "toasted": 3,
      "sliced": SliceStyle.REGULAR,
      "toppings": null
    },
    {
      "bread": "Rye",
      "toasted": 3,
      "sliced": SliceStyle.DIAGONAL,
      "toppings": null
    },
    {
      "bread": "Rye",
      "toasted": 6,
      "jam": ['Strawberry', 'Blueberry', 'Lemon Curd'],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "toasted": 6,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "toasted": 6,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Strawberry"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ['Huckleberry', 'Rhubarb'],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Blueberry"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Huckleberry"],
      "toppings": null
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": null
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Rhubarb"],
      "sliced": SliceStyle.DIAGONAL,
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Rhubarb"],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Cinnamon",
        "Sugar"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": [],
      "toppings": [
        "Avocado",
        "Pepper",
        "Salt"
      ]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado"
      ]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado",
        "Pepper"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": [],
      "toppings": [
        "Avocado",
        "Salt"
      ]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "sliced": SliceStyle.DIAGONAL,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Whole Wheat",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Whole Wheat",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": true,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Rye",
      "buttered": false,
      "jam": ["Lemon Curd"]
    },
    {
      "bread": "Sourdough",
      "buttered": false,
      "jam": ["Lemon Curd"]
    }
  ];