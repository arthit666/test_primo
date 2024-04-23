export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;
  
    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
      const min = Math.min(collection_1[i], collection_2[j], collection_3[k]);
      result.push(min);
  
      if (min === collection_1[i]) {
        i++;
      } else if (min === collection_2[j]) {
        j--;
      } else {
        k++;
      }
    }
  
    while (i < collection_1.length && j >= 0) {
      if (collection_1[i] < collection_2[j]) {
        result.push(collection_1[i]);
        i++;
      } else {
        result.push(collection_2[j]);
        j--;
      }
    }
  
    while (i < collection_1.length && k < collection_3.length) {
      if (collection_1[i] < collection_3[k]) {
        result.push(collection_1[i]);
        i++;
      } else {
        result.push(collection_3[k]);
        k++;
      }
    }
  
    while (j >= 0 && k < collection_3.length) {
      if (collection_2[j] < collection_3[k]) {
        result.push(collection_2[j]);
        j--;
      } else {
        result.push(collection_3[k]);
        k++;
      }
    }
  
    while (i < collection_1.length) {
      result.push(collection_1[i]);
      i++;
    }
  
    while (j >= 0) {
      result.push(collection_2[j]);
      j--;
    }
  
    while (k < collection_3.length) {
      result.push(collection_3[k]);
      k++;
    }
  
    return result;
  }
