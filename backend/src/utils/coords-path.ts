const calculateShortestPath = (graph: number[][], start: number) => {
    const vertex = [];

    for(let i = 0; i < graph.length; i++) {
        if (i !== start) {
            vertex.push(i);
        }
    }
  
    let min_path = Infinity;
    let shortest_path: number[] = [];

    do {
        let current_pathweight = 0;
         
        let k = start;
        let path = [k]
         
        for (let i = 0; i < vertex.length; i++) {
            current_pathweight += graph[k][vertex[i]];
            k = vertex[i];
            path.push(k)
        }
      
        if(current_pathweight < min_path) {
            shortest_path = path
            min_path = current_pathweight;
        }
    } while (findNextPermutation(vertex));

    return { min_path, shortest_path };
}
 
const swap = (data: number[], left: number, right: number) => {
    let temp = data[left];
    data[left] = data[right];
    data[right] = temp;
     
    return data;
}
 
const reverse = (data: number[], left: number, right: number) => {
    while (left < right) {
        let temp = data[left];
        data[left++] = data[right];
        data[right--] = temp;
    }
     
    return data;
}
 
const findNextPermutation = (data: number[]) => {
    if (data.length <= 1) {
        return false;
    }

    let last = data.length - 2;
     
    while (last >= 0) {
        if (data[last] < data[last + 1]) {
            break;
        }
        last--;
    }
     
    if (last < 0) {
        return false;
    }

    let nextGreater = data.length - 1;
     
    for (let i = data.length - 1; i > last; i--) {
        if (data[i] > data[last]) {
            nextGreater = i;
            break;
        }
    }
  
    data = swap(data, nextGreater, last);
    data = reverse(data, last + 1, data.length - 1);
     
    return true;
}

type Coord = { x: number, y: number }

const distance = (a: Coord, b: Coord) => {
    return Math.sqrt(Math.pow(Math.abs(b.x - a.x), 2) + Math.pow(Math.abs(b.y - a.y), 2))
}

export function shortestPathByCoords(coords: Coord[]) {
    const graph = coords.map((a) => {
        return coords.map(b => distance(a, b))
    })

    return calculateShortestPath(graph, 0)
}
